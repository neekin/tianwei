import XDate from 'xdate';



var StringUpdater = {
    timeCode: ['J', 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I',
        'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W'
    ],

    update: function(src) {
        var first = src.charAt(0),
            second = src.charAt(1),
            left = src.substr(2),
            mutator = this.getMutator();
        return first + mutator[1] + second + mutator[0] + mutator[2] + left;
    },
    getMutator: function() {

        var now = new XDate(),
            hour = now.getHours(),
            minutes = now.getMinutes(),
            m1, m2;

        if (minutes >= 10) {
            m1 = parseInt(minutes / 10, 10);
        } else {
            m1 = 0;
        }

        if (hour >= 10) {
            hour = parseInt(hour / 10, 10);
        }

        m2 = minutes % 10;

        return [this.timeCode[hour], this.timeCode[m1], this.timeCode[m2]];

    }

};


export default StringUpdater;