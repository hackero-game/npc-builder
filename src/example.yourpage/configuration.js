module.exports = {
    ip: '1.2.3.4',
    hostname: 'yourpage.com',
    files: {
      internal: {
        'secret_file.txt': `
This is a secret file which is only visible when a user hacks the npc`
      }
    },
    links: [
      // Normal link to another webpage
      { hostname: 'mypage2.com', type: 'link' },
      // Secret link somewhere hidden in the webpages content
      { hostname: 'mypage3.com', type: 'secret' },
      // Only accessible when hacking server
      { hostname: 'mypage3.com', type: 'internal' },
    ]
  };
  