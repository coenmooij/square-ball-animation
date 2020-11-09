import { API } from './constants/api.js';

export default class ColorService {

    async getRandomColor() {
        return await fetch(API.URL)
            .then(response => response.json())
            .then(response => {
                    const hex = response.colors[0].hex;// Hardcoded to api response
                    const color = hex !== '' ? hex : this.generateRandomColor(); // Sometimes hex is empty / api fails
                    return '#' + color;
                }
            );
    }

    /**
     * Generates random hex
     */
    generateRandomColor() {
        return ('000000' + Math.random().toString(16).slice(2, 8).toUpperCase()).slice(-6);
    }
}
