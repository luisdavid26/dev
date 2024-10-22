void main() {
  print(greetEveryone());
  print('suma: ${addtwonumbers(10, 20)}');
  print(greetperson(name: 'fernando' ,message: 'hi,'));
}

String greetEveryone() {
  return 'hello everyone';
}

String greetEveryonefelcha() => 'hello everyone';
int addtwonumbers(a, b) => a + b;

int addtwonumbersoptional(int a, [int? b]) {
  b=b ?? 0;
  
return   a + b;
}

//esto es muy importante ,el poder utilizar los valores de las variables asi
String greetperson({ required String name,String message ='hola,'}){
  return '$message fernando';
}