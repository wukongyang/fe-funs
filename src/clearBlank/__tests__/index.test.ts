import clearBlank from '../index';

test('clearBlank-u0000', () => {
  const ss = '/s/uis-cms/project-team/all';
  expect(clearBlank('/s/uis-cms/project-team\u0000/all')).toEqual(ss);
});

test('clearBlank-前后空格', () => {
  const ss = '/s/uis-cms /project-team/all';
  expect(clearBlank(' /s/uis-cms /project-team\u0000/all ')).toEqual(ss);
});

test('clearBlank-前后空格且多个u0000', () => {
  const ss = '/s/uis-cms/project-team/all';
  expect(clearBlank(' /s/\u0000uis-cms\u0001/project-team\u0002/all ')).toEqual(
    ss,
  );
});

test('clearBlank-中间文本空格', () => {
  const ss = '/s/uis-cms/ project-team/all';
  expect(
    clearBlank(' /s/\u0000uis-cms\u0001/ project-team\u0002/all '),
  ).toEqual(ss);
});
