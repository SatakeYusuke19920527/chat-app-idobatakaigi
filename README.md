# 井戸端会議

## チャットアプリの作成

### 要件
1. Firebase Authを用いてログイン認証機能を実装すること
   > Email&PasswordとGoogleログイン
2. Firestoreを用いてリアルタイムで更新されるチャットアプリを作成すること
   > Firebaseのプロジェクトは各個人で作成し、.envファイルを作成すること
3. デザインはお任せ💓。今はLayoutでラップしているが、外しても大丈夫。

### 実装担当箇所
- Junta -> JuLogin.tsx & JuChat.tsx
- Keisuke -> KeLogin.tsx & KeChat.tsx
- Utoken -> UtLogin.tsx & UtChat.tsx
- Satake -> SaLogin.tsx & SaChat.tsx

### .envファイルについて
以下の形式でプロジェクトのルート階層へ.envファイルを作成する
```
REACT_APP_API_KEY=""
REACT_APP_AUTH_DOMAIN=""
REACT_APP_DATABASE_URL=""
REACT_APP_PROJECT_ID=""
REACT_APP_STORAGE_BUCKET="" 
REACT_APP_MESSAGING_SENDER_ID=""
REACT_APP_APP_ID=""
REACT_APP_LIFF_ID=""
```

### 環境構築方法
1. git clone https://github.com/SatakeYusuke19920527/chat-app-idobatakaigi.git
2. cd chat-app-idobatakaigi
3. npm install
4. npm start