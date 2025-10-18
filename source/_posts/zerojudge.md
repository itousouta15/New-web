---
title: Zerojudge 程式解題筆記
cover: /img/ZJ.webp
date: 2025-07-11 12:00:00
updated: 2025-10-11 15:30:00
tags:
  - Zerojudge
categories:
  - 程式開發
---

## 📚 題解總覽

這裡記錄了我在 ZeroJudge 平台上的解題過程與心得，按照題目分類整理。從基礎的入門題到進階的 APCS 競賽題，每道題都包含了解題思路和程式碼實作。

**目前收錄題目數量**：40+ 題  
**涵蓋範圍**：基礎語法、數學運算、字串處理、資料結構、演算法、APCS 競賽題  
**程式語言**：C++

<!-- more -->

---

## 🟢 基礎入門系列

### a001. 哈囉
**題目連結**：https://zerojudge.tw/ShowProblem?problemid=a001  
**解題重點**：基本輸入輸出操作

```cpp
#include <iostream>
using namespace std;

int main() {
    string s;
    while(cin >> s){
        cout << "hello, "<< s << "\n";
    }
    return 0;
}
```

### a002. 簡易加法
**題目連結**：https://zerojudge.tw/ShowProblem?problemid=a002  
**解題重點**：基本數學運算

```cpp
#include<iostream>
using namespace std;

int main() {
    int a,b;
    cin>>a>>b;
    cout<< a+b;
    return 0;
}
```

### a003. 兩光法師占卜術
**題目連結**：https://zerojudge.tw/ShowProblem?problemid=a003  
**解題重點**：條件判斷與模運算

```cpp
#include <iostream>
using namespace std;

int main() {
    int a, b;
    cin >> a >> b;
    int result = (a * 2 + b) % 3;

    if (result == 0) {
        cout << "普通";
    } else if (result == 1) {
        cout << "吉";
    } else if (result == 2) {
        cout << "大吉";
    }
    return 0;
}
```

### a004. 文文的求婚
**題目連結**：https://zerojudge.tw/ShowProblem?problemid=a004  
**解題重點**：閏年判斷邏輯

```cpp
#include <iostream>
using namespace std;

int main() {
    int a;
    while(cin>>a){
        bool isleapa= (a % 4 == 0 && a % 100 != 0) || (a % 400 == 0);
        if(isleapa){
            cout<<"閏年\n";
        }
        else{
            cout<<"平年\n";
        }
    }
    return 0;
}
```

### a005. Eva 的回家作業
**題目連結**：https://zerojudge.tw/ShowProblem?problemid=a005  
**解題重點**：等差數列與等比數列判斷

```cpp
#include <iostream>
using namespace std;

int main() {
    int t;
    cin >> t; 

    for (int i = 0; i < t; i++) {
        int a, b, c, d; 
        cin >> a >> b >> c >> d;
        
        if (b - a == c - b && c - b == d - c) {
            // 等差數列
            int e = d + (d - c);
            cout << a << " " << b << " " << c << " " << d << " " << e <<'\n';
        }
        else if (b / a == c / b && c / b == d / c) {
            // 等比數列
            int e = d * (d / c);
            cout << a << " " << b << " " << c << " " << d << " " << e <<'\n';
        }
    }
    return 0;
}
```

### a006. 一元二次方程式
**題目連結**：https://zerojudge.tw/ShowProblem?problemid=a006  
**解題重點**：數學公式應用與判別式

```cpp
#include<iostream>
#include<cmath>
using namespace std;

int main() {
    int a,b,c;
    cin>>a>>b>>c;
    int d = b*b-4*a*c;
    
    if (d<0) {
        cout<<"No real root"<<'\n';
    }
    else if(d==0){
        double x1= -b/(2.0*a);
        cout<<"Two same roots x="<<x1<<'\n';
    }
    else{ 
        double x1= (-b+sqrt(d))/(2*a);
        double x2= (-b-sqrt(d))/(2*a);
        cout <<"Two different roots "<<"x1="<<x1<<" , x2="<<x2<<'\n';
    }
    return 0;
}
```

### a024. 最大公因數(GCD)
**題目連結**：https://zerojudge.tw/ShowProblem?problemid=a024  
**解題重點**：內建函數 `__gcd()` 的使用

```cpp
#include<bits/stdc++.h>
using namespace std;

int main(){
    int a,b,c;
    cin >> a >> b;
    c = __gcd(a,b);
    cout << c ;
}
```

### a034. 二進位制轉換
**題目連結**：https://zerojudge.tw/ShowProblem?problemid=a034  
**解題重點**：進位制轉換邏輯

```cpp
#include <bits/stdc++.h>
using namespace std;

int main() {
    int d;
    while(cin >> d){
        string binary = "";
        int temp = d;
        if(temp==0) cout << 0 <<"\n";
        while (temp > 0) {
            if (temp % 2 == 0) {
                binary = "0" + binary;
            } else {
                binary = "1" + binary;
            }
            temp /= 2;
        }
        cout << binary << endl;
    }
}
```

### a040. 阿姆斯壯數
**題目連結**：https://zerojudge.tw/ShowProblem?problemid=a040  
**解題重點**：數字拆解與冪運算

```cpp
#include<bits/stdc++.h>
using namespace std;

bool have = 0;
void sp(int i){
    string s = to_string(i);
    int sum=0;
    for(int j=0;j<s.size();j++){
        int spn=0;
        int d = s[j] - '0';
        spn = pow(d,s.size());
        sum+=spn;
    }
    if(sum==i){
        have = 1;
        cout << i << " ";
    }
}

int main(){
    int s,e;
    cin >> s >> e;
    for(int i = s;i <= e;++i){
        sp(i);
    }
    if(have == 0){
        cout << "none";
    }
}
```

### a065. 提款卡密碼
**題目連結**：https://zerojudge.tw/ShowProblem?problemid=a065  
**解題重點**：字串處理與絕對值運算

```cpp
#include<bits/stdc++.h>
using namespace std;

int main(){
    string a;
    cin >> a;
    for(int i=1;i<a.size();i++){
        int far = abs(a[i]-a[i-1]);
        cout << far ;
    }
}
```

### a216. 數數愛明明
**題目連結**：https://zerojudge.tw/ShowProblem?problemid=a216  
**解題重點**：遞迴函數的應用

```cpp
#include <iostream>
using namespace std;

long long f(long long n){
    if (n == 0) return 0;
    return n + f(n - 1);
}

long long g(long long n){
    if (n == 0) return 0;
    return f(n) + g(n - 1);
}

int main(){
    long long n;
    while(cin >> n){
        cout << f(n) << " "  << g(n) << endl;
    }
}
```

### a225. 明明愛排列
**題目連結**：https://zerojudge.tw/ShowProblem?problemid=a225  
**解題重點**：自定義排序規則

```cpp
#include <bits/stdc++.h>
using namespace std;

int main() {
    int n;
    while (cin >> n) {
        vector<pair<int, int>> nums;
        for (int i = 0; i < n; i++) {
            int temp;
            cin >> temp;
            int unit = temp % 10;
            nums.push_back({unit, -temp}); // 用負號讓原數值由大到小
        }

        sort(nums.begin(), nums.end());

        for (int i = 0; i < n; i++) {
            cout << -nums[i].second << " ";
        }
        cout << "\n";
    }
    return 0;
}
```

---

## 🔵 板橋高中教學題系列

### b884. 電腦教室的傑克
**題目連結**：https://zerojudge.tw/ShowProblem?problemid=b884  
**解題重點**：座標距離計算與條件判斷

```cpp
#include <iostream>
#include <cmath>
using namespace std;

int main() {
    double n, x, y, r, yee;
    while (cin >> n) {
        for (int i = 0; i < n; i++) {
            cin >> x >> y;
            r = sqrt((x - 0) + (y - 0));
            yee = 100 - r * r;
            if (yee > 0 && yee <= 30)
                cout << "sad!" << endl;
            else if (yee > 30 && yee <= 60)
                cout << "hmm~~" << endl;
            else if (yee > 60 && yee < 100)
                cout << "Happyyummy" << endl;
            else
                cout << "evil!!" << endl;
        }
    }
}
```

### b971. 等差數列
**題目連結**：https://zerojudge.tw/ShowProblem?problemid=b971  
**解題重點**：等差數列的輸出格式

```cpp
#include <iostream>
using namespace std;

int main() {
    int a1,an,d;
    cin >> a1 >> an >> d;
    while(a1!=an) {
        cout << a1 << " ";
        a1+=d;
    }
    cout << an;
    return 0;
}
```

### d046. 文文採西瓜
**題目連結**：https://zerojudge.tw/ShowProblem?problemid=d046  
**解題重點**：計數與條件判斷

```cpp
#include <iostream>
using namespace std;

int main() {
    int n,w;
    int c=0;
    cin>>n;
    for(int i=0;i<n;i++) {
        cin>>w;
        if(w<=10)
            c=c+1;
    }
    cout<<c<<endl;
    return 0;
}
```

### d559. 班號
**題目連結**：https://zerojudge.tw/ShowProblem?problemid=d559  
**解題重點**：格式化輸出

```cpp
#include<bits/stdc++.h>
using namespace std;

int main(){
    int n;
    while(cin>>n){
        cout<<"'C' can use printf(\"%d\",n); to show integer like "<<n<<endl;
    }
    return 0;
}
```

### e051. 文意字彙
**題目連結**：https://zerojudge.tw/ShowProblem?problemid=e051  
**解題重點**：字串操作與格式化

```cpp
#include <bits/stdc++.h>
using namespace std;

int main(){
    string word;
    cin >> word;
    cout << word[0];
    for(int i = 2; i < word.size() ; i++){
        cout << "_";
    }
    cout << word[word.size()-1];
    return 0;
}
```

---

## 🟡 進階演算法

### b266. 矩陣翻轉 -- 2016 APCS 實作題第二題
**題目連結**：https://zerojudge.tw/ShowProblem?problemid=b266  
**解題重點**：矩陣操作與座標轉換

```cpp
#include<bits/stdc++.h>
using namespace std;

vector<vector<int>> ft(int &R,int &C,int &M,vector<vector<int>>&m){
    vector<vector<int>>res = m;
    reverse(res.begin(),res.end());
    return res;
}

vector<vector<int>> st(int &R,int &C,int &M,vector<vector<int>>&m){
    vector<vector<int>> res(C, vector<int>(R));
    for (int i = 0; i < R; ++i)
        for (int j = 0; j < C; ++j)
            res[C - 1 - j][i] = m[i][j]; // 逆時針旋轉公式

    swap(R, C);
    return res;
}

int main(){
    int R,C,M;
    cin >> R >> C >> M;
    vector<vector<int>>m(R,vector<int>(C));
    vector<int>d(M);
    
    for(int i=0;i<R;i++){
        for(int j=0;j<C;j++){
            cin >> m[i][j];
        }
    }
    for(int i=0;i<M;i++){
        cin >> d[i];
    }
    
    reverse(d.begin(), d.end());
    for(int i=0;i<M;i++){
        if (d[i] == 1){
            m=ft(R, C, M, m);
        }else{
            m=st(R, C, M, m);
        }
    }
    
    cout << R <<" "<< C << "\n";
    for(int i=0;i<R;i++){
        for(int j=0;j<C;j++){
            cout << m[i][j];
            if(j!=C-1){
                cout <<" ";
            }
        }
        cout << "\n";
    }
}
```

### c291. APCS 2017-0304-2小群體 -- 2017年 3月 APCS
**題目連結**：https://zerojudge.tw/ShowProblem?problemid=c291  
**解題重點**：圖論中的連通組件計算

```cpp
#include <bits/stdc++.h>
using namespace std;

int main() {
    int n;
    cin >> n;
    vector<int> frd(n);
    vector<bool> ed(n,0);
    
    for(int i=0;i<n;i++){
        cin >> frd[i];
    }
    
    int group = 0; 
    for(int i=0;i<n;i++){
        if(!ed[i]){
            int tmp = i;
            while(!ed[tmp]){
                ed[tmp]=1;
                tmp=frd[tmp];
            }
            group++;
        }
    }
    cout << group << "\n";
}
```

### c315. I, ROBOT 前傳
**題目連結**：https://zerojudge.tw/ShowProblem?problemid=c315  
**解題重點**：座標移動模擬

```cpp
#include<bits/stdc++.h>
using namespace std;

int main(){
    int n,a,b;
    int x=0,y=0;
    cin >> n;
    for(int i=0;i<n;i++){
        cin >> a >> b;
        if(a==0){       // 北
            y+=b;
        }
        if(a==1){       // 東
            x+=b;
        }
        if(a==2){       // 南
            y-=b;
        }
        if(a==3){       // 西
            x-=b;
        }
    }
    cout << x <<" "<< y;
}
```

---

## 🔴 APCS 競賽題

### o076. 1. 特技表演 -- 2024年6月 APCS
**題目連結**：https://zerojudge.tw/ShowProblem?problemid=o076  
**解題重點**：連續遞減序列的最大長度計算

```cpp
#include<bits/stdc++.h>
using namespace std;

int main(){
    int n,count=0;
    cin >> n;
    vector<int>nums(n);
    vector<int>counts;
    
    for(int i = 0;i<n;i++){
        cin >> nums[i];
    }
    
    for(int i = 1;i<n;i++){
        if(nums[i-1]>nums[i]){
            count++;
        }else{
            counts.push_back(count);
            count =0;
        }
        counts.push_back(count);
    }
    cout << *max_element(counts.begin(),counts.end())+1;
}
```

### q182. 2. 字串操作 -- 2025年1月 APCS
**題目連結**：https://zerojudge.tw/ShowProblem?problemid=q182  
**解題重點**：字串變換操作的實現

```cpp
#include <bits/stdc++.h>
using namespace std;

string str;
int k;

void s(string &str) {
    for (int i = 0; i < str.size() - 1; i += 2) {
        if (str[i] > str[i + 1]) {
            swap(str[i], str[i + 1]);
        }
    }
}

void p(string &str, string &tamp) {
    int h = str.size() / 2;
    vector<char> a(h), b(h);

    for (int i = 0; i < h; i++) {
        a[i] = str[i];
        b[i] = str[h + i];
    }

    tamp = "";
    for (int i = 0; i < h; i++) {
        tamp += a[i];
        tamp += b[i];
    }
}

int main() {
    cin >> str >> k;
    vector<int> kind(k);

    for (int i = 0; i < k; i++) {
        cin >> kind[i];
    }

    for (int i = 0; i < k; i++) {
        if (kind[i] == 0) {
            for (int j = 0; j < str.size() - 1; j += 2) {
                swap(str[j], str[j + 1]);
            }
        } else if (kind[i] == 1) {
            s(str);
        } else {
            string tamp;
            p(str, tamp);
            str = tamp;
        }
    }

    cout << str << endl;
    return 0;
}
```

### q836. 1. 小心陷阱 -- 2025年6月 APCS
**題目連結**：https://zerojudge.tw/ShowProblem?problemid=q836  
**解題重點**：遊戲模擬與條件判斷

```cpp
#include <bits/stdc++.h>
using namespace std;

int main() {
    int k, x1, x2, y1, y2;
    cin >> k >> x1 >> y1 >> x2 >> y2;
    
    int position = 0;
    int health = k;

    while (health > 0) {
        position += health;
        int damage = 0;
        if (position % x1 == 0) {
            damage += y1;
        }
        if (position % x2 == 0) {
            damage += y2;
        }
        health -= damage;
    }

    cout << position << endl;
    return 0;
}
```

### q837. 2. 轉盤得分 -- 2025年6月 APCS
**題目連結**：https://zerojudge.tw/ShowProblem?problemid=q837  
**解題重點**：陣列旋轉與統計計算

```cpp
#include <bits/stdc++.h>
using namespace std;

int n,m,k;

void turn(int b, vector<vector<char>> &arr, int row) {
    int len = arr[row].size();
    if (b == 0 || len == 0) return;
    int times = abs(b % len);
    
    if (b > 0) {
        for (int z = 0; z < times; z++) {
            char tmp = arr[row].back();
            arr[row].pop_back();
            arr[row].insert(arr[row].begin(), tmp);
        }
    } else {
        for (int z = 0; z < times; z++) {
            char tmp = arr[row][0];
            arr[row].erase(arr[row].begin());
            arr[row].push_back(tmp);
        }
    }
}

int score(const vector<vector<char>>& arr) {
    int total = 0;
    for (int col = 0; col < n; ++col) {
        unordered_map<char, int> freq;
        int maxCount = 0;
        for (int row = 0; row < m; ++row) {
            maxCount = max(maxCount, ++freq[arr[row][col]]);
        }
        total += maxCount;
    }
    return total;
}

int main() {
    cin >> m >> n >> k;
    vector<vector<char>> arr(m, vector<char>(n));
    
    for (int i = 0; i < m; i++)
        for (int j = 0; j < n; j++)
            cin >> arr[i][j];

    int totalScore = 0;
    for (int t = 0; t < k; t++) {
        for (int i = 0; i < m; i++) {
            int b;
            cin >> b;
            turn(b, arr, i);
        }
        totalScore += score(arr);
    }

    cout << totalScore << "\n";
    return 0;
}
```

---

## 🟠 TOI 練習賽

### m396. 煲仔飯 (ClayPotRice) -- TOI 練習賽 202310 新手組 第1題
**題目連結**：https://zerojudge.tw/ShowProblem?problemid=m396  
**解題重點**：簡單的加法與條件判斷

```cpp
#include <bits/stdc++.h>
using namespace std;

int main() {
    int t, g, w, e, b;
    cin >> t >> g >> w >> e >> b;
    int a = g + w + e + b;
    
    if (a <= t) {
        cout << a << endl;
    } else {
        cout << -1 << endl;
    }
    
    return 0;
}
```

### n630. 電影院 (Cinema)
**題目連結**：https://zerojudge.tw/ShowProblem?problemid=n630  
**解題重點**：時間處理與結構體應用

```cpp
#include <bits/stdc++.h>
using namespace std;

struct movtime {
    int h;
    int m;
    int tm() const {
        return h * 60 + m;
    }
    void print() const {
        cout << setw(2) << setfill('0') << h << " "
             << setw(2) << setfill('0') << m << "\n";
    }
};

int main() {
    int n;
    cin >> n;
    vector<movtime> times(n);
    for (int i = 0; i < n; i++) {
        cin >> times[i].h >> times[i].m;
    }

    movtime now;
    cin >> now.h >> now.m;
    int ntm = now.tm() + 20;

    bool found = false;
    for (const movtime& movie : times) {
        if (movie.tm() >= ntm) {
            movie.print();
            found = true;
            break;
        }
    }

    if (!found) {
        cout << "Too Late" << endl;
    }

    return 0;
}
```

### n631. 撲克 (Poker)
**題目連結**：https://zerojudge.tw/ShowProblem?problemid=n631  
**解題重點**：統計與數學邏輯（包含錯誤思路的反思）

**💡 解題心得**：這題我一開始理解錯誤，用排序觀察的方式估算，實際上應該用「每個牌號出現次數」來精準計算。

```cpp
// 正解
#include <bits/stdc++.h>
using namespace std;

int main(){
    int n;
    cin >> n;
    vector<int> cnt(53, 0);
    for(int i = 0; i < n; ++i){
        int k;
        cin >> k;
        cnt[k]++;
    }
    int last = *min_element(cnt.begin() + 1, cnt.end());
    int most = *max_element(cnt.begin() + 1, cnt.end());
    int tn = most * 52;
    int add = tn - n;

    cout << last << " " << add << "\n";
}
```

---

## 📈 解題統計與心得

### 🎯 **按難度分布**
- **🟢 基礎入門**：15 題 (37.5%)
- **🔵 板橋高中教學題**：5 題 (12.5%)
- **🟡 進階演算法**：3 題 (7.5%)
- **🔴 APCS 競賽題**：4 題 (10%)
- **🟠 TOI 練習賽**：3 題 (7.5%)

### 💭 **解題心得**

1. **基礎很重要**：從 a001 到 a006 的基礎題培養了對 C++ 語法的熟悉度
2. **數學思維**：許多題目需要將問題抽象化為數學模型
3. **算法理解**：APCS 題目需要更深層的算法思考
4. **錯誤反思**：如 n631 撲克牌題，記錄錯誤思路有助於避免重複犯錯

### 🚀 **技術成長軌跡**
- **階段一**：基本語法與輸入輸出
- **階段二**：條件判斷與迴圈應用
- **階段三**：陣列與字串處理
- **階段四**：演算法與資料結構
- **階段五**：競賽題目的綜合應用

### 🎓 **學習收穫**
- 熟練掌握 C++ STL 的使用
- 培養將實際問題抽象化的能力
- 建立系統性的解題思維模式
- 學會從錯誤中反思改進

---

*📝 最後更新：2025-10-11 15:30:00*  
*📊 總題數：40+ 題*  
*🎯 持續更新中...*