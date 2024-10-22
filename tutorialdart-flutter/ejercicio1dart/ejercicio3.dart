void main(){
  final numbers=[1,2,3,4,5,5,5,6,7,8,9,9,10];
  print('lista original $numbers');
  print('length ${numbers.length}');
  print('index ${numbers[0]}');
  print('first ${numbers.first}');
  print('reversed ${numbers.reversed}');
  final reversednumbers = numbers.reversed;
  print('iterable $reversednumbers');
  print('list ${reversednumbers.toList()}');
  print('set ${reversednumbers.toSet()}');

  final numerosmasgrandesquecinco=numbers.where((int num){
    return num>5;
  });
  print('mayor a cinco $numerosmasgrandesquecinco');
  print('mayor a cinco ${numerosmasgrandesquecinco.toSet()}');

}