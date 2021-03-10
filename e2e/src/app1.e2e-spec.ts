import { threadId } from 'node:worker_threads';
import {browser,by,element} from 'protractor';

describe('all functional test',() => {

      it('should open signup page',() => {

        browser.sleep(3000);
        element(by.xpath("//mat-icon[contains(text(),'app_registration')]")).click();
        browser.sleep(1000); 

    });


    it('should register the user',() => {

        browser.sleep(1500); 

        element(by.xpath("//input[@id='actual-btn']")).sendKeys("/home/vasu.1/Downloads/avatar.png");
        browser.sleep(1500);
        element(by.css("#mat-input-0")).sendKeys("test");

        element(by.css("#mat-input-1")).sendKeys("user11");
        element(by.css("#mat-input-2")).sendKeys("testuser11@gmail.com");
        element(by.css("#mat-input-3")).sendKeys("testuser11");

        browser.sleep(1500);
        element(by.xpath("//button[@id='btn']")).click();

    });


    

    it('should open login page',() => {

        browser.sleep(1500);
        element(by.xpath("//mat-icon[contains(text(),'login')]")).click();
        browser.sleep(1000); 

    });

    it('should login the user',() => {

        browser.sleep(1000);

        element(by.css("#mat-input-0")).sendKeys("testuser@gmail.com");


        element(by.css("#mat-input-1")).sendKeys("testuser");
        element(by.css("#btn")).click();
        browser.sleep(1000); 

    });

    it('should search the recipe',() => {

        browser.sleep(1000);
        element(by.css("#mat-input-0")).sendKeys("chicken");

        element(by.xpath("//button[contains(text(),'Search')]")).click();

        browser.sleep(1500);

    });

    it('should marked  the recipe favourite',() => {

        browser.sleep(1000);
        element(by.xpath("//mat-tab-body/div[1]/div[2]/app-recipe[1]/div[1]/div[1]/mat-card[1]/mat-card-actions[1]/button[1]")).click();
        browser.sleep(1000);
        
    });

    it('should marked  the recipe recommended',() => {

        browser.sleep(1000);
        element(by.xpath("//mat-tab-body/div[1]/div[2]/app-recipe[1]/div[1]/div[1]/mat-card[1]/mat-card-actions[1]/button[2]")).click();

        browser.sleep(1000);
        
    });

    it('should removed the recipe from favourites',()=> {

        browser.sleep(1000);
        element(by.xpath("//mat-tab-body/div[1]/app-favourites[1]/div[1]/div[1]/mat-card[1]/mat-card-actions[1]/button[1]/mat-icon[1]")).click();
        browser.sleep(1000);
    });

    it('should removed the recipe from recommended',()=> {

        browser.sleep(1000);
        element(by.xpath("//mat-icon[contains(text(),'delete')]")).click();
        browser.sleep(1000);
    });

    it('should logout the user',()=> {

        browser.sleep(1000);
        element(by.xpath("//mat-icon[contains(text(),'logout')]")).click();
        browser.sleep(1000);
    });


        

  
});



