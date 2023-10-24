import * as mongoose from "mongoose";

export class RepositoryBase<T> {
    protected model: mongoose.Model<T & mongoose.Document>;

    constructor(schemaModel: mongoose.Model<T & mongoose.Document>) {
        this.model = schemaModel;
    }

    async insertMany(elems: any[]): Promise<any[]>{
        elems = await this.model.insertMany(elems);
        return elems;
    }
}
