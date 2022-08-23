import { unserialize } from 'php-serialize';

export class Gstatic {
  static remapArrToObj(data: any[], keyName = 'meta_key', valName = 'meta_value') {
    //
    const obj: any = {};
    data.forEach((item) => {
      obj[item[keyName]] = item[valName];
      if (( item[valName][1] === ':' && item[valName][3]) === ':') {
        try {
          obj[item[keyName]] = unserialize(item[valName]);
        } catch (e) {
          console.log('---------------------------------');
          console.log('obj', item[valName]);
        }
      } else {
        obj[item[keyName]] = item[valName];
      }
    });
    // console.log('obj', obj);
    return obj;
  }
}
