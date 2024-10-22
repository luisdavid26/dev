void main() {
  print(greetEveryone());
  print('suma: ${addtwonumbers(10, 20)}');

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
