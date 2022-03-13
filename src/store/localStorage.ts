import LocalStorageWorker from "./localStorage-helper";

// custom class for store movies list ids in local storage
export default class MoviesListStorage {
    storageWorker: LocalStorageWorker;

    // main key that use for store list of movies
    storageKey: string;

    // list of movie ids
    ids: Array<string>;

    constructor(storageKey: string) {
        this.storageWorker = new LocalStorageWorker();

        this.storageKey = storageKey;

        this.ids = new Array<string>();

        this.activate();
    }

    // activate custom storage for movies
    activate() {
        //this.clear();

        this.loadAll();
    }

    // load all ids from storage to list for working with it
    loadAll() {
        var storageData = this.storageWorker.get(this.storageKey);

        if (storageData != null && storageData.length > 0) {
            var ids = JSON.parse(storageData);
            console.log(ids);
            if (ids != null) {
                this.ids = ids;
            }
            console.log(this.ids);
        }
    }

    // add new movies
    addMovies(movieIds: number[]) {
        this.ids = []

        for (var i = 0; i < movieIds.length; i++) {
            this.ids.push(String(movieIds[i]));
        }

        console.log(this.ids);

        // 3. save to storage
        this.save();
    }

    // clear all data about movies
    clear() {
        // remove data by key from storage
        this.storageWorker.add(this.storageKey, "");

        // or remove with key
        //this.storageWorker.remove(this.storageKey);
    }

    // save to storage (save as JSON string)
    save() {
        var jsonIds = JSON.stringify(this.ids);
        this.storageWorker.add(this.storageKey, jsonIds);
    }
}