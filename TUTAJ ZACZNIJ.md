# Getting Started

### Setup środowiska IDE

1. Włącz w swoim IDE obsługę .editorconfig(ustawienia stylu/formatowania) bez tego nie będziemy mieć jednolitego stylu formatowania
2. Ustaw line separator na LF i stosuj taki zawsze podczas commitowania. ( Line Separator: \n )
3. Projekt korzysta z Lomboka, procesora adnotacji, musisz mieć to włączone w swoim IDE. np. dla IntelliJ jest to `File | Settings | Build, Execution, Deployment | Compiler | Annotation Processors` i tu zaznaczasz `Enable annotation processing` i `Obtain processors from project classpath`
4. Po przypisaniu do siebie taska utwórz nowy branch z brancha master w formacie `cyfra issue-nazwa-twojego-issue`  np. 1-create-clean-build

#### Bez tego nie zaczynasz pracy.

### Guides

####Workflow Feature Branch i Kanban
Pracujemy w systemie zwanym Feature Branch - wygląda w skrócie to tak: branch Master jest nietykalny i służy tylko do pobierania zatwierdzonych,
sprawdzonych zmian z innych branchy, jest branchem który zawsze działa i ma działać, nic do niego bezpośrednio nie pushujemy.
Tu wkracza feature branch. Wybieramy sobie taska samemu(`Projects | Reference Links System | tablica ToDo`) przypisując siebie,
lub jeśli go nie ma to go tworzymy i tworzymy razem z nim nowego brancha zaciągając zmiany z mastera(checkout).
Ten branch jest tylko i wyłącznie dla was i pod waszą pracę, można broić. Kiedy lokalnie na maszynie przechodzą testy
i build się kompiluje bez błędów robicie push do remote waszego brancha i wtedy przechodzi on pipeline i Statyczną analize
(pozniej to dopracujemy) wtedy wystawia się pull requesta (PR) wybierając swój branch i oznaczamy osoby do Code Review(CR) które przejrzą wasz kod.
Jeśli oczywiście wszystko OK to taka zmiana jest mergowana do mastera i możecie zamykać task, jeśli nie dostajecie informację zwrotną co jest do poprawy a PR
wisi w tablicy `In Progress`.

Jeśli zmiana została zmergowana po PR możesz skasować oba branche - local i remote - ponieważ nie są nam już do niczego potrzebne.
