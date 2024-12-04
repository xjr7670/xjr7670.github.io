var container = new Vue({
    el: '#container',
    data: {
        phrases: [

        ],
        word: '',
        word2: '',
    },
    methods: {
    },
    watch: {
        word(newVal, oldVal) {
            this.phrases = [];
            var allPhrases = [];
            var keys = Object.keys(jisho);
            for (let i = 0; i < keys.length; i++) {
                var list = jisho[keys[i]];
                for (let j = 0; j < list.length; j++) {
                    allPhrases.push(list[j]);
                }
            }
            for (let i = 0; i < allPhrases.length; i++) {
                var ja = allPhrases[i].ja;
                var en = allPhrases[i].en;
                if (ja.indexOf(newVal) >= 0) {
                    this.phrases.push(allPhrases[i]);
                } else if (en.indexOf(newVal) >= 0) {
                    this.phrases.push(allPhrases[i]);
                }
            }

        }
    }
})