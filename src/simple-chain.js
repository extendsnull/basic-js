const chainMaker = {
  getLength() {
    return this.chain ? this.chain.length : 0;
  },

  addLink(value = '(  )') {
    if (!this.chain) {
      this.chain = [];
    }

    this.chain.push(`( ${value} )`);
    return this;
  },

  removeLink(position) {
    const index = position - 1;
    
    if (
      !this.chain[index]
      || typeof position !== 'number'
      || position % 1
    ) {
      delete this.chain;
      throw new Error();
    }

    this.chain.splice(index, 1);
    return this;
  },

  reverseChain() {
    if (Array.isArray(this.chain)) {
      this.chain.reverse();
    }

    return this;
  },

  finishChain() {
    const chain = this.chain;
    delete this.chain;
    return `${chain.join('~~')}`;
  }
};

module.exports = chainMaker;
