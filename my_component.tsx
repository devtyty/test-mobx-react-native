import React, {useState} from 'react';
import {action, computed, makeAutoObservable} from 'mobx';
import {Text, TouchableOpacity, View} from 'react-native';
import {observer} from 'mobx-react';

class TestDetail {
  private _text: boolean = false;

  constructor() {
    makeAutoObservable(this, {setText: action, getText: computed});
  }

  setText = (text: boolean) => {
    this._text = text;
  };

  get getText(): boolean {
    return this._text;
  }
}

const MyComponent = () => {
  console.log('render mycomponent');
  const [user] = useState(new TestDetail());
  return (
    <View>
      <Text>{`${user.getText}`}</Text>
      <TouchableOpacity onPress={() => user.setText(!user.getText)}>
        <Text>Ok</Text>
      </TouchableOpacity>
    </View>
  );
};

export default React.memo(observer(MyComponent));
