class DummyDataProvider {
  static dummyToDoList = [
    {
      id: new Date().now,
      description: "Learn React Native",
      done: false
    },
    {
      id: new Date().now,
      description: "Implement React Native",
      done: false
    }
  ];
  static getDummyToDoList() {
    return DummyDataProvider.dummyToDoList;
  }

  static addToDummyToDoList(item) {
    DummyDataProvider.dummyToDoList = [
      ...DummyDataProvider.dummyToDoList,
      item
    ];
  }
}

export default DummyDataProvider;
