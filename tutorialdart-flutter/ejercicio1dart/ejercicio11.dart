void main(){
emitNumbers().listen((value){
  print("stream $value");
});


}
Stream emitNumbers() async*{

  final valuesparaemitir=[1,2,3,4];
  for (int i in valuesparaemitir) {
    await Future.delayed(const Duration(seconds: 1));
  //el yield es como return pero lo que hace es ceder el dato para que el stream lo muestre
  yield i;
  
  }


}