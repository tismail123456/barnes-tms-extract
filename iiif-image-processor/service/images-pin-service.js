require('seneca')()
  .use('images')
  .listen({ type: 'tcp', pin: 'role:images', port: 10204 })