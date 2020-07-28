********************\*\*\********************* START **********************\***********************

Zaraz po ściągnięciu z repo musimy wpisać komende :

> npm init
> Ma to na celu stworzenie folderu node_modules jest on niezbedny do pracy z node.js

Żeby uruchomić front należy przenieść sie do folderu react i w terminalu wpisać :

> npm run dev-server
> po tak wpisanej komendzie powinniśmy dostać taki wynik w tereminalu

---

i ｢wds｣: Project is running at http://localhost:8080/
i ｢wds｣: webpack output is served from /
i ｢wds｣: Content not from webpack is served from C:\Users\user\Desktop\KRIG_frontend\react\public
i ｢wdm｣: Hash: 2332e82ffcee3e8f118f
Version: webpack 4.42.1
Time: 2549ms
Built at: 2020-07-28 12:41:40 PM
Asset Size Chunks Chunk Names
bundle.js 3.31 MiB main [emitted] main
Entrypoint main = bundle.js
[0] multi (webpack)-dev-server/client?http://localhost:8080 ./src/app.js 40 bytes {main} [built][./node_modules/ansi-html/index.js] 4.16 KiB {main} [built][./node_modules/normalize.css/normalize.css] 566 bytes {main} [built][./node_modules/react-dom/index.js] 1.33 KiB {main} [built][./node_modules/react/index.js] 190 bytes {main} [built][./node_modules/strip-ansi/index.js] 161 bytes {main} [built][./node_modules/webpack-dev-server/client/index.js?http://localhost:8080] (webpack)-dev-server/client?http://localhost:8080 4.29 KiB {main} [built][./node_modules/webpack-dev-server/client/overlay.js] (webpack)-dev-server/client/overlay.js 3.51 KiB {main} [built][./node_modules/webpack-dev-server/client/socket.js] (webpack)-dev-server/client/socket.js 1.53 KiB {main} [built][./node_modules/webpack-dev-server/client/utils/createsocketurl.js] (webpack)-dev-server/client/utils/createSocketUrl.js 2.91 KiB {main} [built][./node_modules/webpack-dev-server/client/utils/log.js] (webpack)-dev-server/client/utils/log.js 964 bytes {main} [built][./node_modules/webpack-dev-server/client/utils/reloadapp.js] (webpack)-dev-server/client/utils/reloadApp.js 1.59 KiB {main} [built][./node_modules/webpack-dev-server/client/utils/sendmessage.js] (webpack)-dev-server/client/utils/sendMessage.js 402 bytes {main} [built][./node_modules/webpack/hot sync ^\.\/log$] (webpack)/hot sync nonrecursive ^\.\/log\$ 170 bytes {main} [built][./src/app.js] 3.66 KiB {main} [built] + 33 hidden modules
i ｢wdm｣: Compiled successfully.
i ｢wdm｣: Compiling...

---

Pod tym linkiem http://localhost:8080/ bedziemy mieć nasz testowy component.

********************\*\*\********************* Folders meaning **********************\***********************
public/ -> folder z konfiguracyjny bundle i tamplate html, folder nie wymaga żadnych zmian watpię żeby w najbliższym czasie coś trzeba było tam robić

src/components -> folder w którym bedziemy przechowywali wszytskie stworzone komponenty, kazdy komponent powinen być stworzony w osobnym pliku \*.js, nie tworzymy CAŁYCH WIDOKÓW w jednym komponęcie staramy sie tworzyć komponęty które bedą mogły być wykorzystane w różnych widokach

styles/ -> w nim przechowujemy style dla naszych komponetnówużywamy scss, jest on niemal identyczny jak css natomiast zapewnia kilka udogodnień takich jak używanie zmiennych które zapisujemy w \_base.scss i możemy potem uzywać, czy defaultowe stylizacje dla całej strony \_settings, każdy kompnent stylizujemy osobno w folderze components a następnie importujemy do głównego pliku style.scss, pamiętajmy o tym że: - każdy komponent nazywamy określoną nomenklatura \_nazwaKomponentu.scss - nazewnictowo stylizowanych komponetów musi zostać ustandyryzowane żeby uniknąć nadpisywania styli, czyli nie mozemy nazywać przykładowego diva className = 'header' bo jest duże prawdopodobieńswto ze ktoś inny mógł tak nazwa, dlatego używamy className = "nazwaKomponetu--nazwaObiektu" np. className = "Login--email-input"

app.js -> to jest nasz główny root reacta póki co jest tam testowy jsx który wyświetla nam nasz testowy napis, w przyszłości głównie bedziemy tam importować komponenty czy routing itd.

package.json -> znajdują sie tutaj wszytskie package których uzywamy w naszym projekcie w moemenceie gdy zainstalujecie jakiś moduł npm to tam trafia inormacja o nim i jego wersji

.babelrc, packaga-lock.json, webpack.config.js, yarn.lock - pliki konfiguracyjne
