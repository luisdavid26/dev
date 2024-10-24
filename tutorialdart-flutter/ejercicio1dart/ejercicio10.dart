void main() {
  emitNumbers().listen((value) {
    print("valor $value");
  });
}

Stream<int> emitNumbers() {
  return Stream.periodic(const Duration(seconds: 1), (value) {
    print("stream $value");
    return value;
  }).take(5);
}
