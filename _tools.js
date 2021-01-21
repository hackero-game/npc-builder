module.exports = {
  buildBinFile(type, level, options = {}) {
    const mergedOptions = {
      // Defaults
      ...{ executable: 'bin' },
      // More options
      ... options,
      // Requirements
      type,
      level
    }
    return JSON.stringify(mergedOptions);
  },
  buildPdfFile(title, text, options = {}) {
    const mergedOptions = {
       // Defaults
       ...{ size: 4.3, signed: true },
       ...options,
      title,
      text,
      ...(options.licensed!== undefined) ? {
        licensed: options.licensed,
        user: ''
      } : {},
    }
    return JSON.stringify(mergedOptions);
  }
}
