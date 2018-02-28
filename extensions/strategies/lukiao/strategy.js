module.exports = {
  name: 'lukiao',
  description: 'Homebrew.',

  getOptions: function () {
    this.option('period', 'period length, same as --period_length', String, '30m')
    this.option('period_length', 'period length, same as --period', String, '30m')
  },

  calculate: function () {
  },

  onPeriod: function (s, cb) {

    s.signal = 'buy'

    cb()
  },

  onReport: function () {
    var cols = []
    return cols
  }
}

