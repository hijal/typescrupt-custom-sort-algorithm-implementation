import { NumberCollection } from './NumberCollection';
import { CharacterCollection } from './CharacterCollection';
import { LinkedList } from './LinkedList';

const numberCollection = new NumberCollection([0, -3, 2, 1, 0]);
numberCollection.sort();
console.log(numberCollection.data);

const characterCollection = new CharacterCollection('Xaayb');
characterCollection.sort();
console.log(characterCollection.data);

const linkedList = new LinkedList();
linkedList.add(40);
linkedList.add(-1);
linkedList.add(0);
linkedList.add(22);
linkedList.add(200);

linkedList.sort();
linkedList.print();
