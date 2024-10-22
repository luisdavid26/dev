void main() {
  final Map<String,dynamic> rawjson={
    'name':'tony stark',
    'power': 'money',
    'isAlive':true
  };
  final ironman = Hero.fromJson( rawjson );
 // final ironman = Hero(isAlive: false, power: 'money', name: 'tony stark');
  print( ironman );
}

class Hero {
  String name;
  String power;
  bool isAlive;
  Hero({required this.name, required this.power, required this.isAlive});

  Hero.fromJson( Map<String,dynamic> json)
    :name=json['name']?? 'no name found',
    power=json['power']?? 'no power found', 
    isAlive=json['isAlive']??'no isAlive found';

  @override
  String toString() {
    // TODO: implement toString
    return '$name , $power ${isAlive ? 'yes' : 'nope'}';
  }
}
