'use strict'

const { ServiceProvider } = require('@adonisjs/fold')
const path = require('path')

class TestProvider extends ServiceProvider {
  /**
   * Register namespaces to the IoC container
   *
   * @method register
   *
   * @return {void}
   */registerRoute(){
          this.app.autoload(path.join(__dirname,"../moduletest/controller/Http"),'Test')
   }
  register () {
    //
    this.registerRoute()
  }

  /**
   * Attach context getter when all providers have
   * been registered
   *
   * @method boot
   *
   * @return {void}
   */
  boot () {
    //
    require('../moduletest/route')
  }
}

module.exports = TestProvider
