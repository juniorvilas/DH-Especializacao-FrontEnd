const dummy = (shouldTriggerCallback: boolean, callback: () => void): void => {
  if (shouldTriggerCallback) callback();
};

export default dummy;


