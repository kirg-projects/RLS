Podstrona ShopPage wymaga do swojego działania uruchomionego serwera przesyłającego w JSON'ie (pod adresem `http://127.0.0.1:3000/courses.json`) listę dostępnych kursów. Każdy z kursów składa się z:
 - tytułu,
 - opisu,
 - oceny,
 - ścieżki do pliku graficznego z logo kursu,
 - ceny.
 
# Przykład: #
```
{
    "items": [
        {
            "title": "Kurs Java",
            "description": "To jest opis.To jest opis.To jest opis.To jest opis.To jest opis.To jest opis.To jest opis.To jest opis.To jest opis.To jest opis.To jest opis.To jest opis.To jest opis.To jest opis.To jest opis.To jest opis.To jest opis.To jest opis.To jest opis.To jest opis.To jest opis.To jest opis.",
            "rating": 4,
            "imgPath": "http://127.0.0.1:3000/imgs/Java-logo.png",
            "price": "22 zł"
        },
        {
            "title": "Kurs PHP",
            "description": "Znakomity, zwięzły, ale treściwy kurs o PHP w niskiej cenie. Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum.",
            "rating": 5,
            "imgPath": "http://127.0.0.1:3000/imgs/php-logo.png",
            "price": "5 zł"
        }
    ]
}
```

