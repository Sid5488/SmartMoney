/* eslint-disable prettier/prettier */
import { getRealm } from './Realm';
import { Alert } from 'react-native';

export const saveEntry = async () => {
    const realm = await getRealm();
    let data = {};

    try {
        realm.write(() => {
            data = {
                id: 'ABC',
                amount: 12.4,
                entryAt: new Date(),
                isInt: false,
            };

            realm.create('Entry', data, true);
        });

        console.log('saveEntry :: data', JSON.stringify(data));
    } catch (err) {
        console.log('SaveEntry :: error on save object?: ', err);
        Alert.alert('Erro ao salvar os dados de lançamento');
    }

    return data;
};
