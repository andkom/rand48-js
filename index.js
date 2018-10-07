const a_hi = 0x5DE
const a_lo = 0xECE66D
const b = 0x0B
const max_half = 0x1000000

class Rand48 {

    constructor(seed = new Date().getTime()) {
        this.init(seed)
    }

    _nextState() {
        let tmp_lo = this.state_lo * a_lo + b
        let tmp_hi = this.state_lo * a_hi + this.state_hi * a_lo

        if (tmp_lo >= max_half) {
            let carry = Math.floor(tmp_lo / max_half)

            tmp_hi = tmp_hi + carry
            tmp_lo = tmp_lo % max_half
        }

        tmp_hi = tmp_hi % max_half

        this.state_lo = tmp_lo
        this.state_hi = tmp_hi
    }

    init(seed) {
        let seed_hi = Math.floor(seed / max_half)
        let seed_lo = seed % max_half

        this.state_lo = seed_lo ^ a_lo
        this.state_hi = seed_hi ^ a_hi
    }

    random() {
        this._nextState()

        let first = (this.state_hi * 4) + Math.floor(this.state_lo / 0x400000)

        this._nextState()

        let second = (this.state_hi * 8) + Math.floor(this.state_lo / 0x200000)

        let num = first * 0x8000000 + second
        let res = num / Math.pow(2, 53)

        return res
    }
}

module.exports = Rand48