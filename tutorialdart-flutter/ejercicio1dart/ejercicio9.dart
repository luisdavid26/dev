Future<void> main() async {
  print("inicio del programa");

  try {
    final value = await httpGet("https:/hola.com");
    print("exito $value");
  } on Exception catch (err) {
    print("tenemos una excepcion $err");
  } catch (err) {
    print("tenermos un error $err");
  } finally {
    print("fin del try catch");
  }

  print("fin del programa");
}

Future<String> httpGet(String url) async {
  await Future.delayed(const Duration(seconds: 1));

  throw Exception("no hay parametros en el url");
}
