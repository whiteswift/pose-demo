import posed from 'react-pose';

export const FadingTitle = posed.span({
    init: {
        opacity: 1
    },
    loading: {
        opacity: 0.4,
        transition: {
            type: 'keyframes',
            values: [1, 0.4, 1],
            times: [0, 0.5, 1],
            duration: 1000,
            loop: Infinity
        }
    },

});
