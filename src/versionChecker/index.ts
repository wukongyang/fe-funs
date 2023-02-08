interface Config {
  /** 通知版本更新的回调 */
  notify?: () => void;
  /** 轮询间隔时长 */
  refreshInterval?: number;
}

const Domain = 'xiongmaoboshi.com';

export default class VersionChecker {
  curVersionHtml: string = null;

  private timer: NodeJS.Timeout = null;

  private readonly _instance: VersionChecker = null;

  private readonly notify: () => void = null;

  private readonly refreshInterval: number = null;

  constructor({ notify, refreshInterval }: Config) {
    if (!this._instance) {
      this._instance = this;
    }

    this.notify = notify;
    this.refreshInterval = refreshInterval;
  }

  public getResource(): Promise<string> {
    const htmlUrl = window.location.href.split('#')[0];
    return new Promise((resolve) => {
      const xhr = new XMLHttpRequest();
      xhr.open('GET', htmlUrl);
      xhr.onreadystatechange = () => {
        if (xhr.readyState === 4 && xhr.status === 200) {
          resolve(xhr.responseText);
        }
      };
      xhr.onerror = () => {
        resolve('');
      };
      xhr.send();
    });
  }

  public async getVersion() {
    const newHtml = await this.getResource();
    if (newHtml && this.curVersionHtml && newHtml !== this.curVersionHtml) {
      if (this.notify) {
        this.notify();
      }
      this.stop();
    }
  }

  public async start() {
    const { href } = location;
    /** 本地不执行检查&只有早上9点到晚上10点才会去做轮询 */
    if (
      !href.includes(Domain) ||
      new Date().getHours() > 22 ||
      new Date().getHours() < 9
    ) {
      return;
    }
    this.curVersionHtml = await this.getResource();
    const handler = () => {
      this.getVersion();
    };
    const duration = this.refreshInterval || 3e5;
    /** 默认每30分钟去轮询检查 */
    this.timer = setInterval(handler, duration);
  }

  public stop() {
    clearInterval(this.timer);
  }
}
