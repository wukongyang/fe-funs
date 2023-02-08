import { useEffect } from 'react';
import VersionChecker from '..';

let versionCheckerInstance: VersionChecker = null;

const VersionCheckerDemo = () => {
  useEffect(() => {
    if (!versionCheckerInstance) {
      versionCheckerInstance = new VersionChecker({
        notify: () => {
          console.warn('版本更新了...');
          // Modal.confirm({
          //   content: `检测到新版本更新啦，请确认无重要数据未保存后刷新页面`,
          //   cancelText: '暂不更新',
          //   okText: '立即更新',
          //   onOk: () => {
          //     window.location.reload();
          //   },
          //   onCancel: () => {
          //     console.warn('啥都不做..')
          //   },
          // })
        },
      });
    }
    versionCheckerInstance.start();

    return () => {
      if (versionCheckerInstance) {
        versionCheckerInstance.stop();
      }
    };
  }, []);
};

export default VersionCheckerDemo;
