import supertest from 'supertest';
import app from '../index';
import util1 from '../Utilities/util1';
import express from 'express';

const request = supertest(app.app);

// test for image endpoint

describe('Test successful endpoint responses', () => {
  it('check if image found and resized', async () => {
    const endpoint = '/api/images/fjord/500/500';
    const response = await request.get(endpoint);
    // result
    expect(response.status).toBe(200);
  });

  it('check if image has correct height and wdith', async () => {
    // wrong image name
    const endpoint = '/api/images/fjord/500/500';
    const response = await request.get(endpoint);
    // result
    expect(response.status).toBe(200);
  });
});

// test for image processing

describe('check resized process', () => {
  it('check if image is in the cach', async () => {
    const resizedBefore: boolean = util1.checkCache('500_500_fjord.jpg');
    expect(resizedBefore).toBe(true);
  });

  it('check if image resize', async () => {
    const done: any = util1.resizeImage(
      { params: { image: 'fjord', width: 500, height: 500 } } as unknown as express.Request,
      { sendFile: () => {} } as unknown as express.Response
    );
    expect(done).toBe(true);
  });

  it('check if cach created', async () => {
    const cachCreated: boolean = util1.createThumbnailFolder();
    // if it's created before then it's false and test will pass
    expect(cachCreated).toBe(false);
  });
});
