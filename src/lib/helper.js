import { default as lodashDebounce } from 'lodash.throttle';
import { default as lodashThrottle } from 'lodash.throttle';

const helper = () => {
}

export const debounce = (fn, delay) => {
    return lodashDebounce(fn, delay);
}

export const asyncThrottle = (func, wait) => {
    const throttled = lodashThrottle((resolve, reject, args) => {
        func(...args).then(resolve).catch(reject);
    }, wait);
    return (...args) =>
        new Promise((resolve, reject) => {
            throttled(resolve, reject, args);
        });
};

export default helper;