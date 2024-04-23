# @uniiem/vigenere-cipher

![GitHub Actions Workflow Status](https://img.shields.io/github/actions/workflow/status/HoshinoSuzumi/lib-vigenere/ci.yml)
![NPM Downloads](https://img.shields.io/npm/dm/%40uniiem%2Fvigenere-cipher)
![NPM Version (with dist tag)](https://img.shields.io/npm/v/%40uniiem%2Fvigenere-cipher/latest)
![npm bundle size](https://img.shields.io/bundlephobia/min/%40uniiem%2Fvigenere-cipher)
![GitHub License](https://img.shields.io/github/license/HoshinoSuzumi/lib-vigenere)

Vigenère cipher implementation in TypeScript

## Installation

```bash
npm install @uniiem/vigenere-cipher
```

## Usage

```typescript
import { enctypt, decrypt } from '@uniiem/vigenere-cipher';

const key = 'OFCPGD';
const plaintext = 'CTFEVER @ VIGENERE CIPHER TEST';

const ciphertext = enctypt(plaintext, key);
console.log(ciphertext); // 'QYHTBHF @ AKVKQSWG ROSVJT IKVH'

const decrypted = decrypt(ciphertext, key);
console.log(decrypted); // 'CTFEVER @ VIGENERE CIPHER TEST'
```

## Sponsor

Buy me a coffee~

[![Support me on Patreon](https://img.shields.io/endpoint.svg?url=https%3A%2F%2Fshieldsio-patreon.vercel.app%2Fapi%3Fusername%3D5ANK41%26type%3Dpledges&style=flat)](https://patreon.com/5ANK41)
[![爱发电](https://afdian.moeci.com/11/badge.svg)](https://afdian.net/a/hoshino_suzumi)
