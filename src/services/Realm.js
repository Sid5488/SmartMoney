/* eslint-disable prettier/prettier */
import Realm from 'realm';

import CategorySchema from '../schemas/CategoryShema';
import EntrySchema from '../schemas/EntrySchema';

export const getRealm = async () => {
    const realm = await Realm.open({
        schema: { CategorySchema, EntrySchema },
        schemaVersion: 1,
    });

    return realm;
};
