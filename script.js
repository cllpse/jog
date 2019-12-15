const jog = () => {
  const expressionInCase = /sprint/gi;
  const expressionLowerCase = /sprint/g;
  const expressionUpperCase = /Sprint/g;

  const replaceLowerCase = '🏃🏼jog';
  const replaceUpperCase = '🏃🏼Jog';

  const expressionJog = 'jog';

  const interval = 2000;

  const replaceNodeValue = (childNode) => {
    childNode.nodeValue = childNode.nodeValue
      .replace(expressionLowerCase, replaceLowerCase)
      .replace(expressionUpperCase, replaceUpperCase);
  };

  const ensureClassName = (childNode) => {
    if (childNode.parentElement && childNode.parentElement.classList) {
      childNode.parentElement.classList.add('all-jogged-up');
    }
  };

  setInterval(() => {
    const nodes = document.body.querySelectorAll('*');

    nodes.forEach(node => {
      node.childNodes.forEach(childNode => {
        if (childNode.nodeType === 3) {
          const nodeValue = childNode.nodeValue;

          if (nodeValue.match(expressionInCase)) {
            replaceNodeValue(childNode);

            ensureClassName(childNode);
          }

          if (nodeValue.match(expressionJog)) {
            ensureClassName(childNode);
          }
        }
      });
    });
  }, interval);
};

jog();
