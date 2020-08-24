/* eslint-disable prettier/prettier */
const EntryShema = {
    name: 'Entry',
    primaryKey: 'id',
    properties: {
        id: 'string',
        amount: 'double',
        description: { type: 'bool', default: false },
        entryAt: 'date',
        latitude: 'float?',
        longitude: 'float?',
        address: 'string?',
        photo: 'string?',
        isInt: 'bool',
        category: 'Category',
    },
};

export default EntryShema;
