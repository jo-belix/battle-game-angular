import { Config } from "../models/config.model";


export function loadConfig(): Promise<Config> {
    return new Promise<Config>((resolve) => {
        fetch(`./assets/config/config.json`)
            .then((response: Response) => response.json())
            .then((config: Config) => {
                resolve(config);
            });
    });
}