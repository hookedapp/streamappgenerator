import { Injectable } from '@nestjs/common';
import { CreateCreatorDto } from './dto/create-creator.dto';
import { UpdateCreatorDto } from './dto/update-creator.dto';
import fs from 'fs';
import path from 'path';

@Injectable()
export class CreatorService {
  create(createCreatorDto: CreateCreatorDto) {
    const shelljs = require('shelljs')
    const { appName,accessToken,appTitle, locationId } = createCreatorDto
    shelljs.exec(`cd ../ && expo init ${appName} --template hookedapp/streamexpotemplate`, function(code, stdout, stderr) {
      console.log('Exit code:', code);
    //   console.log('Program output:', stdout);
    //   console.log('Program stderr:', stderr);
    //   shelljs.exec(`echo stdout:${stdout}`)
    //   shelljs.exec(`echo code:${code}`)
    //   shelljs.exec(`echo stderr:${stderr}`)
      const fs = require('fs');
      const path = require('path');

      let student = {
        "expo": {
          "name": `${appName}`,
          "slug": `${appName}`,
          "version": "1.0.0",
          "orientation": "portrait",
        "icon": "./assets/images/icon.png",
        "scheme": "myapp",
        "userInterfaceStyle": "automatic",
        "splash": {
          "image": "./assets/images/splash.png",
          "resizeMode": "contain",
          "backgroundColor": "#ffffff"
        },
        "updates": {
          "fallbackToCacheTimeout": 0
        },
        "assetBundlePatterns": [
          "**/*"
        ],
        "ios": {
          "supportsTablet": true,
          "bundleIdentifier": `com.hookedstream.${appName}`
        },
        "android": {
          "adaptiveIcon": {
            "foregroundImage": "./assets/images/adaptive-icon.png",
            "backgroundColor": "#ffffff"
          },
          "package": `com.hookedstream.${appName}`
        },
        "web": {
          "favicon": "./assets/images/favicon.png"
        }
      }
    }

      fs.writeFileSync(path.resolve(__dirname, `../../../${appName}/app.json`), JSON.stringify(student));

      // API_URL=https://api-dev-unstable.hookedapi.com

      const javascriptFile = `
      API_URL=https://api.streamyourpos.com\n
      ACCESS_TOKEN=${accessToken}\n
        LOCATION_ID=${locationId}\n
        APP_NAME="${appName}"\n
        APP_TITLE="${appTitle}"\n
        LIGHT_MODE="true"\n
`

      fs.writeFileSync(path.resolve(__dirname, `../../../${appName}/.env`), javascriptFile);
      shelljs.exec(`cd ../${appName} && expo publish`, function() {
      // export NODE_OPTIONS=--openssl-legacy-provider
console.log("DONE")
      })

    });
    return 'This action adds a new creator';
  }


  publish(createCreatorDto: CreateCreatorDto) {
    const shelljs = require('shelljs')
    const { appName, accessToken, locationId, appTitle } = createCreatorDto


    const fs = require('fs');
    const path = require('path');
    const javascriptFile = `
      API_URL=https://api.streamyourpos.com\n
      ACCESS_TOKEN=${accessToken}\n
        LOCATION_ID=${locationId}\n
        APP_NAME="${appName}"\n
        APP_TITLE="${appTitle}"\n
`

    fs.writeFileSync(path.resolve(__dirname, `../../../${appName}/.env`), javascriptFile);
    shelljs.exec(`cd ../${appName} && expo publish`, function() {
      // export NODE_OPTIONS=--openssl-legacy-provider
      console.log("DONE")
    })
    return 'this is publish!'
  }

  firstBuild(createCreatorDto: CreateCreatorDto) {
    const shelljs = require('shelljs')
    const { appName } = createCreatorDto
    shelljs.exec(`cd ../${appName} && eas build:configure --platform all && eas build --platform ios`, () => {
      // console.log('Exit code:', code);
      // shelljs.exec(`y`, function(code) {
      //   console.log('Exit code:', code);
      // });
// console.log("time to send input")
    });
    // setTimeout(() => {
    //   shelljs.exec(`y`, function(code, stdout, stderr) {
    //     console.log('Exit code:', code);
    //   });
    // }, 10000)
    return 'this is creating!'
  }

  build(createCreatorDto: CreateCreatorDto) {
    const shelljs = require('shelljs')
    const { appName } = createCreatorDto
    shelljs.exec(`cd ../${appName} && eas build:configure --platform all && eas build --platform ios --non-interactive && eas submit --platform ios`, function(code, stdout, stderr) {
      console.log('Exit code:', code);
      console.log('Program output:', stdout);
      console.log('Program stderr:', stderr);
      shelljs.exec(`echo stdout:${stdout}`)
      shelljs.exec(`echo code:${code}`)
      shelljs.exec(`echo stderr:${stderr}`)
    });
    setTimeout(() => {
    shelljs.exec(`y`, function(code, stdout, stderr) {
      console.log('Exit code:', code);
    });
    }, 10000)
    return 'this is creating!'
  }

  upload(createCreatorDto: CreateCreatorDto) {
    const shelljs = require('shelljs')
    shelljs.exec(`cd ../ && expo init ${createCreatorDto.appName} --template hookedapp/streamexpotemplate`, function(code, stdout, stderr) {
      console.log('Exit code:', code);
      console.log('Program output:', stdout);
      console.log('Program stderr:', stderr);
      shelljs.exec(`echo stdout:${stdout}`)
      shelljs.exec(`echo code:${code}`)
      shelljs.exec(`echo stderr:${stderr}`)
    });
    return 'this is uploading!'
  }

  update(id: number, updateCreatorDto: UpdateCreatorDto) {
    return `This action updates a #${id} creator`;
  }

  remove(id: number) {
    return `This action removes a #${id} creator`;
  }
}
