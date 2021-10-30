---
title: '50 Contekan Github'
date: 'March 6, 2021'
excerpt: 'Contekan github untuk mempermudah dalam develope'
cover_image: '/images/posts/img3.jpg'
---

Dokumentasi ini bersumber dari : [freeCodeCamp](https://www.freecodecamp.org/news/git-cheat-sheet/) Fabio Pasific
    
    
1. **Cara memeriksa konfigurasi Git Anda:**

    Perintah di bawah ini mengembalikan daftar informasi tentang konfigurasi git Anda termasuk nama pengguna dan email:
    ```
    git config -l
    ```
    
2. **Cara mengatur nama pengguna Git Anda:**

    Dengan perintah di bawah ini Anda dapat mengkonfigurasi nama pengguna Anda:
    ```
    git config --global user.name "Fabio"
    ```

3. **Cara mengatur email pengguna Git Anda:**

    Perintah ini memungkinkan Anda mengatur alamat email pengguna yang akan Anda gunakan dalam komit Anda.
    ```
    git config --global user.email "signups@fabiopacifici.com"
    ```

4. **Cara meng-cache kredensial login Anda di Git:**

    Anda dapat menyimpan kredensial login di cache sehingga Anda tidak perlu mengetiknya setiap saat. Cukup gunakan perintah ini:
    ```
    git config --global credential.helper cache
    ```

5. **Cara menginisialisasi repo Git:**

    Semuanya dimulai dari sini. Langkah pertama adalah menginisialisasi repo Git baru secara lokal di root proyek Anda. Anda dapat melakukannya dengan perintah di bawah ini:
    ```
    git init
    ```

6. **Cara menambahkan file ke area pementasan/staging di Git:**

    Perintah di bawah ini akan menambahkan file ke area pementasan. Ganti saja filename_heredengan nama file yang ingin Anda tambahkan ke area pementasan.
    ```
    git add filename_here
    ```

7. **Bagaimana menambahkan semua file di area pementasan di Git**

    Jika Anda ingin menambahkan semua file dalam proyek Anda ke area pementasan, Anda dapat menggunakan wildcard .dan setiap file akan ditambahkan untuk Anda.
    ```
    git add .
    ```

8. **Cara menambahkan hanya file tertentu ke area pementasan di Git**

    Dengan tanda bintang pada perintah di bawah ini, Anda dapat menambahkan semua file yang dimulai dengan 'fil' di area pementasan.
    ```
    git add fil*
    ```

9. **Cara memeriksa status repositori di Git:**

    Perintah ini akan menunjukkan status repositori saat ini termasuk file bertahap, tidak bertahap, dan tidak terlacak.
    ```
    git status
    ```

10. **Bagaimana melakukan perubahan pada editor di Git:**

    Perintah ini akan membuka editor teks di terminal tempat Anda dapat menulis pesan komit penuh.

    Pesan komit terdiri dari ringkasan singkat perubahan, baris kosong, dan deskripsi lengkap tentang perubahan setelahnya.
    ```
    git commit
    ```

11. **Bagaimana melakukan perubahan dengan pesan di Git:**

    Anda dapat menambahkan pesan komit tanpa membuka editor. Perintah ini memungkinkan Anda hanya menentukan ringkasan singkat untuk pesan komit Anda.
    ```
    git commit -m "your commit message here"
    ```

12. **Bagaimana melakukan perubahan (dan melewati area pementasan) di Git:**

    Anda dapat menambahkan dan menjalankan file terlacak dengan satu perintah dengan menggunakan opsi -a dan -m.
    ```
    git commit -a -m"your commit message here"
    ```

13. **Cara melihat riwayat komit Anda di Git:**

    Perintah ini menunjukkan riwayat komit untuk repositori saat ini:
    ```
    git log
    ```

14. **Cara melihat riwayat komit Anda termasuk perubahan di Git:**

    Perintah ini menunjukkan riwayat komit termasuk semua file dan perubahannya:
    ```
    git log -p
    ```

15. **Cara melihat komit tertentu di Git:**
    Perintah ini menunjukkan komit tertentu.

    Ganti commit-id dengan id dari komit yang Anda temukan di log komit setelah kata komit.
    ```
    git show commit-id
    ```

16. **Cara melihat statistik log di Git:**

    Perintah ini akan menyebabkan log Git menampilkan beberapa statistik tentang perubahan di setiap komit, termasuk baris yang diubah dan nama file.
    ```
    git log --stat
    ```

17. **Cara melihat perubahan yang dibuat sebelum melakukannya menggunakan "diff" di Git:**

    Anda dapat meneruskan file sebagai parameter untuk hanya melihat perubahan pada file tertentu.
    git diffhanya menampilkan perubahan tidak bertahap secara default.

    Kita bisa memanggil diff dengan --stagedbendera untuk melihat perubahan bertahap.
    ```
    git diff
    git diff all_checks.py
    git diff --staged
    ```

18. **Cara melihat perubahan menggunakan "git add -p":**

    Perintah ini membuka prompt dan menanyakan apakah Anda ingin melakukan perubahan atau tidak, dan menyertakan opsi lain.
    ```
    git add -p
    ```

19. **Cara menghapus file terlacak dari pohon kerja saat ini di Git:**

    Perintah ini mengharapkan pesan komit untuk menjelaskan mengapa file itu dihapus.
    ```
    git rm filename
    ```

20. **Cara mengganti nama file di Git:**

    Perintah ini tahapan perubahan, kemudian mengharapkan pesan komit.
    ```
    git mv oldfile newfile
    ```

21. **Cara mengabaikan file di Git:**

    Buat .gitignore file dan lakukan.
    
22. **Cara mengembalikan perubahan tidak bertahap di Git:**

    Perintah ini tahapan perubahan, kemudian mengharapkan pesan komit.
    ```
    git checkout filename
    ```

23. **Cara mengembalikan perubahan bertahap di Git:**

    Anda dapat menggunakan tanda opsi -p untuk menentukan perubahan yang ingin Anda setel ulang.
    ```
    git reset HEAD filename
    git reset HEAD -p
    ```

24. **Cara mengubah komit terbaru di Git:**

    git commit --amend memungkinkan Anda untuk mengubah dan menambahkan perubahan pada komit terbaru.
    ```
    git commit --amend
    ```

    !! Catatan !!: memperbaiki komit lokal dengan amend itu bagus dan Anda dapat mendorongnya ke repositori bersama setelah Anda memperbaikinya. Tetapi Anda harus menghindari mengubah komitmen yang telah dipublikasikan.
    
25. **Cara mengembalikan komit terakhir di Git:**

    git revertakan membuat komit baru yang merupakan kebalikan dari semua yang ada di komit yang diberikan.
    Kita bisa mengembalikan komit terbaru dengan menggunakan alias head seperti ini:
    ```
    git revert HEAD
    ```

26. **Cara mengembalikan komit lama di Git:**

    Anda dapat mengembalikan komit lama menggunakan id komitnya. Ini membuka editor sehingga Anda dapat menambahkan pesan komit.
    ```
    git revert comit_id_here
    ```

27. **Cara membuat cabang baru di Git:**

    Secara default, Anda memiliki satu cabang, cabang utama. Dengan perintah ini, Anda dapat membuat cabang baru. Git tidak akan beralih secara otomatis - Anda harus melakukannya secara manual dengan perintah selanjutnya.
    ```
    git branch branch_name
    ```

28. **Cara beralih ke cabang yang baru dibuat di Git:**

    Jika Anda ingin menggunakan cabang lain atau cabang yang baru dibuat, Anda dapat menggunakan perintah ini:
    ```
    git checkout branch_name
    ```

29. **Cara membuat daftar cabang di Git:**

    Anda dapat melihat semua cabang yang dibuat menggunakan git branchperintah. Ini akan menampilkan daftar semua cabang dan menandai cabang saat ini dengan asterisk dan menyorotnya dengan warna hijau.
    ```
    git branch
    ```

30. **Cara membuat cabang di Git dan langsung beralih ke sana:**

    Dalam satu perintah, Anda dapat langsung membuat dan beralih ke cabang baru.
    ```
    git checkout -b branch_name
    ```

31. **Cara menghapus cabang di Git:**

    Saat Anda selesai bekerja dengan sebuah cabang dan telah menggabungkannya, Anda dapat menghapusnya menggunakan perintah di bawah ini:
    ```
    git branch -d branch_name
    ```

32. **Cara menggabungkan dua cabang di Git:**

    Untuk menggabungkan riwayat cabang tempat Anda saat ini berada branch_name, Anda perlu menggunakan perintah di bawah ini:
    ```
    git merge branch_name
    ```

33. **Cara menampilkan log komit sebagai grafik di Git:**

    Kita bisa menggunakan --graphuntuk mendapatkan log komit untuk ditampilkan sebagai grafik. Juga,
    --onelineakan membatasi pesan komit ke satu baris.  
    ```
    git log --graph --oneline --all
    ```

34. **Cara menampilkan log komit sebagai grafik dari semua cabang di Git:**

    Caranya sama seperti perintah di atas, tetapi untuk semua cabang.
    ```
    git log --graph --online --all
    ```

35. **Cara membatalkan gabungan yang berkonflik di Git:**

    Jika Anda ingin membuang gabungan dan memulai kembali, Anda dapat menjalankan perintah berikut:
    ```
    git merge --abort
    ```

36. **Cara menambahkan repositori jarak jauh di Git**

    Perintah ini menambahkan repositori jarak jauh ke repositori lokal Anda (cukup ganti https://repo_heredengan URL repo jarak jauh Anda).
    ```
    git add remote https://repo_here
    ```

37. **Cara melihat URL jarak jauh di Git:**

    Anda dapat melihat semua repositori jarak jauh untuk repositori lokal Anda dengan perintah ini:
    ```
    git remote -v
    ```

38. **Cara mendapatkan info lebih lanjut tentang repo jarak jauh di Git:**

    Cukup ganti origindengan nama remote yang diperoleh dengan menjalankan perintah git remote -v.
    ```
    git remote show origin
    ```

39. **Cara mendorong perubahan ke repo jarak jauh di Git:**

    Ketika semua pekerjaan Anda siap untuk disimpan di repositori jarak jauh, Anda dapat mendorong semua perubahan menggunakan perintah di bawah ini:
    ```
    git push
    ```

40. **Cara menarik perubahan dari repo jarak jauh di Git:**

    Jika anggota tim lain sedang mengerjakan repositori Anda, Anda dapat mengambil perubahan terbaru yang dibuat ke repositori jarak jauh dengan perintah di bawah ini:
    ```
    git pull
    ```

41. **Cara memeriksa cabang jarak jauh yang dilacak Git:**

    Perintah ini menunjukkan nama semua cabang jarak jauh yang dilacak Git untuk repositori saat ini:
    ```
    git branch -r
    ```

42. **Cara memeriksa cabang jarak jauh yang dilacak Git:**

    Perintah ini akan mengunduh perubahan dari repo jarak jauh tetapi tidak akan melakukan penggabungan pada cabang lokal Anda (seperti yang dilakukan git pull).
    ```
    git fetch
    ```

43. **Cara memeriksa log komit saat ini dari repo jarak jauh di Git**

    Komit setelah komit, Git membuat log. Anda dapat mengetahui log repositori jarak jauh dengan menggunakan perintah ini:
    ```
    git log origin/main
    ```

44. **Cara menggabungkan repo jarak jauh dengan repo lokal Anda di Git:**

    Jika repositori jarak jauh memiliki perubahan yang ingin Anda gabungkan dengan lokal Anda, maka perintah ini akan melakukannya untuk Anda:
    ```
    git merge origin/main
    ```

45. **Cara mendapatkan konten cabang jarak jauh di Git tanpa menggabungkan secara otomatis:**

    Ini memungkinkan Anda memperbarui remote tanpa menggabungkan konten apa pun ke
    cabang lokal. Anda dapat memanggil git merge atau git checkout untuk melakukan penggabungan.
    ```
    git remote update
    ```

46. **Cara mendorong cabang baru ke repo jarak jauh di Git:**

    Jika Anda ingin mendorong cabang ke repositori jarak jauh, Anda dapat menggunakan perintah di bawah ini. Ingatlah untuk menambahkan -u untuk membuat cabang di hulu:
    ```
    git push -u origin branch_name
    ```

47. **Cara menghapus cabang jarak jauh di Git:**

    Jika Anda tidak lagi membutuhkan cabang jarak jauh, Anda dapat menghapusnya menggunakan perintah di bawah ini:
    ```
    git push --delete origin branch_name_here
    ```

48. **Cara menggunakan Git rebase:**

    Anda dapat mentransfer pekerjaan yang sudah selesai dari satu cabang ke cabang lain menggunakan git rebase.
    ```
    git rebase branch_name_here
    ```

    Git Rebase bisa menjadi sangat berantakan jika Anda tidak melakukannya dengan benar. Sebelum menggunakan perintah ini saya sarankan Anda membaca kembali dokumentasi resmi [di sini](https://git-scm.com/book/it/v2/Git-Branching-Rebasing)

49. **Cara menjalankan rebase secara interaktif di Git:**

    Anda dapat menjalankan git rebase secara interaktif menggunakan flag -i. Ini akan membuka editor dan menampilkan serangkaian perintah yang dapat Anda gunakan.
    ```
    git rebase -i master
    # p, pick = use commit
    # r, reword = use commit, but edit the commit message
    # e, edit = use commit, but stop for amending
    # s, squash = use commit, but meld into previous commit
    # f, fixup = like "squash", but discard this commit's log message
    # x, exec = run command (the rest of the line) using shell
    # d, drop = remove commit
    ```

50. **Cara memaksa permintaan push di Git:**

    Perintah ini akan memaksa permintaan push. Ini biasanya bagus untuk cabang permintaan tarik karena tidak ada orang lain yang harus mengkloningnya.
    Tapi ini bukan sesuatu yang ingin Anda lakukan dengan repo publik.
    ```
    git push -f
    ```