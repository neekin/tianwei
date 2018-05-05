import XDate from 'xdate';

var timeCode = ['J', 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I',
    'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W'
];

var StringUpdater = {
    mode1: {
        update: function (src) {

            var first = src.charAt(0),
                second = src.charAt(1),
                left = src.substr(2),
                mutator = getMutator();
            return first + mutator[1] + second + mutator[0] + mutator[2] + left;
        }
    }

};

var getMutator = function () {

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

    return [timeCode[hour], timeCode[m1], timeCode[m2]];

};

export {
    StringUpdater
}