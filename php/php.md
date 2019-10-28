# Основы PHP

## Переменные
* Как создать переменную в PHP?

    `$name = string,boolean,number,etc;`

* Как вывести переменную внутри строки?
```php
<?php
$string = 'text';
echo = "text $string";
echo = 'text' . $string;
echo = "text {$string}";
```
    
## Файлы
* Как в PHP разделить код на несколько файлов?
       
Для того чтобы разделить код и свободно пользоваться им в разных файлах,
нужно написать в конце файла(который хотим передавать)
```
require 'index.view.php';
 ```
     
## Массивы
* Что такое массив?   
 
Набор значений.

```php
<?php
$names = [
    'John',
    'Mary',
    'Cont'
];

```
* Что такое ассоциативный массив?

Упорядоченный набор значений, которые описываются при помощи ключа.

```php
<?php
$person = [
    'age' => 31,
    'hair' => 'brown',
    'career' => 'web developer' //ass array

];
```
* Как из массива/ассоциативного массива достать элемент?
    
```php
<?php

foreach ($names as $name) : ?>
<li><?= $name?></li>
<?php endforeach; ?></h1>

```
## Функции
* Что такое функция?

Это подпрограммы, то есть какой-то блок кода, который имеет название,входные параметры для обратботки(если они нужны)
 , который может быть выполнен.
```php
     function redirect($path)
     {
         header("Location: /{$path}");
     }
```


## Ошибки
* Что такое эксепшен (исключение)?

Преобразование ошибок в исключения, для того чтобы понять в чем она заключается.

    
* Как поймать эксепшен и вывести пояснение, если что-то пойдет не так в коде?

При помощи операторов throw, try(генерируем исключение), catch(перехватываем, если ошибка).


```php
<?php
    try {
       $statement = $this->pdo->prepare($sql);
       $statement->execute($parameters);
       } catch (Exception $e) {
     die('Whoops');
       
    }
```
```php
<?php
protected function callAction($controller, $action)
   
   {
       $controller = "App\\Controllers\\{$controller}";
       $controller = new $controller;
       if (! method_exists($controller, $action)) {
           throw new Exception("{$controller} does not respond the {$action} action.");
       }
       return $controller->$action();
   }

```
## Классы, ООП
* Что такое класс?

 Объединие каких-либо связанных данных, функций. То есть некий тип данных.

* Что такое метод класса? Что такое свойство класса?

 Метод - функции внутри класса. Свойства - переменные внутри класса,метода.
    
 ```php
 <?php
    class QueryBuilder
    
    {
//свойство

protected $pdo;

//метод

public function __construct($pdo)
{
    
    $this->pdo = $pdo;
    
}
    }
    
 ```
* Зачем нужны публичные, приватные и защищенные методы/свойства?

Для того чтобы ограничивать нас от методов/свойств. Это необходимо
в том случае, если нам не нужно передавать какую-либо переменную в другие классы
для этого мы используем private (объявляет метод или свойство доступным только в том классе в котором он присутствует),
protected(могут быть использованны в дочерних классах),public(могут быть использованы везде).

```php
<?php
class Connection

{

    //Данный метод будет доступен в других классах, объектах
    public static function make($config)

    {
try {
 
      return new PDO(
      $config['connection'].';dbname='.$config['name'],
      $config['username'],
      $config['password'],
      $config['options']
    );

} catch (PDOException $e) {
    die($e->getMessage());
}
    }

}
```
    
* Что такое инстанс (экземпляр класса)?

Запись результата класса в переменную или использование класса(создание нового объекта).

````
$user = new User();
````
    
* Чем отличается статический метод класса от обычного? Как создать/вызвать статический метод?

 К статическому методу обращение идет без создания экземпляра класса.

```php
    <?php
    public static function bind($key, $value)
    
{
    
    static::$registry[$key] = $value;
    
}
```
    
* Как обычно именуют классы?

Именем(сущ.) которое описывает данные внутри класса.

    
## PDO
* Что такое PDO? Зачем нужен этот класс?
 
Объект данных PHP, необходим для доступа к базам данных в PHP.

* Как подключить PDO, чтобы начать с ним работать?
    
    `
    Необходимо установить соединие с нашей БД 
    $host = 'localhost'; 
    $dbname = 'test'; 
    $user = "admin"; 
    $pass = 123; 
    $db = new PDO("mysql:host=$host;dbname=$db", $user, $password);
    Потом мы можем использовать наш объект для работы с БД.
    `
## Общие
* Что такое рефакторинг? Для чего он нужен?
 
Процесс улучшения внутренней части кода, без вмешательства во внешнюю часть, т.е. весь функционал остается тот же.

* Что такое API?

Набор готовых функций,классов, процедур и т.д., предоставляемым ПО.

* Что такое принцип единственной ответственности (the single responsibility)?
    
Этот принцип обозначает, что каждый объект должен иметь одну ответственность и она должна полностью соответствовать классу.

    
## Типизация
* Что такое type hinting (контроль типов)?

Проверка на соответствие данных. Существует два основных типа типизирования(строгое и мягкое).
    
* Для чего нужен type hinting?

Позволяет функциям строго задавать тип передаваемых параметров.

    
* Как передавать параметр определенного типа?
    
`
array $array, int $a,
`
    
* Как передать параметр определенного класса?

## Конфигурация проекта
* Почему лучше выносить название базы, пароль и пр. отдельно, а не использовать по месту?

Для того чтобы было проще обращаться к другим бд (если будем менять), поскольку мы будем знать где находится файл с подключением. 

## Роутинг
* Что такое роутинг?

Процесс преобразования URI в набор понятных фреймворку параметров
    
```php
    <?php
    public function direct($uri, $requestType)
{
    
    
    if ( array_key_exists($uri,$this->routes[$requestType]))
    {
    
      return ($this->callAction(
  ...explode('@', $this->routes[$requestType][$uri])
      ));
    
    
    }
    
    throw new Exception('No route');
    
}
```
    
* Зачем нужно выносить этот функционал в отдельный класс/модуль?

Для того чтобы он был легко переносимым и также отвечал назначению класса(т.е. описывал именно тот функционал, который был заложен в название класса, модуля).
    
* Что такое URI и в чем его отличие от URL?
    `
    URL является частью URI.
    URL описывает местонахождние локации ресурса.
    URI описывает местонахождние локации ресурса и местонахождние ресурса в локации.
    `
    
```php
    <?php
    class Request
    
    {
    
public static function uri()
    
{
    
    // names?name=Jef
    
    // parse_url($_SERVER['REQUEST_URI'], PHP_URL_PATH);
    
    return trim(
    
    parse_url($_SERVER['REQUEST_URI'], PHP_URL_PATH), '/'
    
    );
}
    
public static function method()
    
{
    
    return $_SERVER['REQUEST_METHOD']; //get,post
    
}
    
    }
```
    
* Как в статическом методе создать экземпляр родительского класса?
    
```php
    <?php
       public static function bind($key, $value)

    {

        static::$registry[$key] = $value;

    }
```
    
* Что такое чейнинг и как его реализовать? Приведите пример.
    
Вызов подряд нескольких методов в большом классе.
    
```php
    <?php
    class PagesController
    
    {
    
public  function home()
    
{

     view('index');
    
}
    
    
public function  about()
    
{
    
    $company = 'Laracasts';
    
    /##require '/home/user/PhpstormProjects/learning-php/views/about.view.php';##/
    
    return view('about', ['company' => $company]);
    
}
    
    
public function contact()
    
{
    
    /##require '/home/user/PhpstormProjects/learning-php/views/contact.view.php';##/
    
    return view('contact');
}
    
    }
    
```
    
## Вьюхи
* Какие движки для шаблонизации распространены в PHP?
    
Blade, Twig, Smart и сам PHP поскольку изначально родился как шаблонизатор.

## Функции для работы с массивами
* Сколько функций есть в PHP для работы с массивами?

 Очень много [функций](http://php.net/manual/ru/ref.array.php)
    
* Как отфильтровать массив?
    
```php
    <?php
    class Post
    
    {
    
public $title;
    
    
public $published;
    
    
public function __construct($title, $published)
    
{
    
    $this->title = $title;
    $this->published = $published;
    
}
    
    }
      $posts = [
      
  new Post('My First Post', true),
      
  new Post('My Second Post', true),
      
  new Post('My Third Post', true),
      
  new Post('My Fourth Post', false),
      
      
      ];
      
      
      $unpublishedPost = array_filter($posts, function ($post){
      
        return !$post->published;
      
      });
      
      
      
      $publishedPost = array_filter($posts, function ($post){
      
  return $post->published;
      
      });
      
      
      var_dump($unpublishedPost,$publishedPost);
```
    
* Как преобразовать элементы массива (сформировать другой массив на основе текущего)?
```php
    <?php
    $modified = array_map(function ($post){
        $post->published = true;
        return $post;
        return (array) $post;
    } ,$posts);
    
    $titles = array_map(function ($post) {
       return $post->title;
    }, $posts);
``` 
* Как составить массив значений по свойству объекта или ключу массива?
    
```php
    <?php
    foreach ($posts as $index => $post)

{
    $posts[$index] = (array) $post;

}
```
## Forms, Request Types, and Routing
* Какие бывают запросы? С какими из них работают чаще всего?
 
 GET,POST
 
* Как достать разные части URL?
    
```php
    <?php
     public static function uri()
    {

// names?name=Jef
// parse_url($_SERVER['REQUEST_URI'], PHP_URL_PATH);
        return trim(
            parse_url($_SERVER['REQUEST_URI'], PHP_URL_PATH), '/'
        );
    }
```
    
* Как сохранить в базу то, что отправлено из формы?

При помощи запроса POST.

    
## Dynamic Inserts With PDO
* Как в PHP сделать из массива строку, разделенную запятыми?
    
```php
    <?php
    $array = ['First', 'Second'];
    
    $newPost = implode(',',$array);
    
    echo $newPost;
```
    
* Как в строку Hello, my name is %s, I'm %d передать параметры и что означают %s и %d?
    
```php
    <?php
    $sql = sprintf(
    'Hello,my name  is %s , I'm %d',
    $table,$id
        );
```
`
s- что это строка, d - целое значение integer
`
* Как сделать редирект на определенный URI?
        
```
    function redirect($path)
    {
        header("Location: /{$path}");
    }
```
    
## Composer Autoloading
* Что такое Composer? Где он хранит свои настройки?

Средство по управлению зависимостями. Хранит все свои зависимости в файле autoload_classmap.php

* Что нужно сделать, чтобы автоматически загружать все классы по определенному пути? Что это нам дает?

Для этого нужно прописать путь и после чего в консоле написать composer dump-autoload. Нам не нужно прописывать зависимости между файлами.

     
* Что такое PSR-4 и какие еще бывают PSR?

Правила, которые определяют полное имя класса пути к файлу.
     
## Your First DI Container
* Когда я добавляю класс в проект, который использует автолоадинг Композера, почему он сразу не работает?
     
Потому что не указаны пути в файле composer.

     
## Refactoring to Controller Classes
* Почему не стоит создавать много глобальных функций?
 
Для того чтобы разгружать весь проект.

## Switch to Namespaces
* Зачем нужны неймспейсы? Что они нам дают?

Для инкапсуляции файлов. Они дают возможность использовать одно и тоже имя засчет разных директорий. Предоставляют возможность группировать логически связанные классы и т.д.

* Как указать, что данный класс использует другой класс по неймспейсу?
     
     `namespace App\Controllers;`
     
* Зачем нужны фреймворки?

Для облегчения написания кода, поскольку фрейморки содержат описание каких-либо нужных методов.
