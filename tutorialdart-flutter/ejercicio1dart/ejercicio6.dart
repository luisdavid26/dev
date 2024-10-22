void main() {
  final Hero wolverine = Hero(name: 'logan',power: 'regeneracion');

  print(wolverine.toString());
  print(wolverine.name);
  print(wolverine.power);
}

class Hero {
  String name;
  String power;
  Hero({required this.name, this.power='sin poder'});

  // Hero(String pname,String ppower)
  //:name=pname,
  //power=ppower;
  @override
  String toString() {
    // TODO: implement toString
    return '$name - $power';
  }






}

