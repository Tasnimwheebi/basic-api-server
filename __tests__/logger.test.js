'use strict';

const { server } = require( '../src/server.js' );
const supertest = require( 'supertest' );
const request = supertest( server );


//testing food api
describe( 'food api', () => {
    let id ;
    // Test create method
    it( 'should create food using POST', async () => {
      // arrange
      let food = {
        name: 'cherry',
        type:'fruit',
      };
      //act
      const res = await request.post( '/api/v1/food' ).send( food );
      //assert
      expect( res.status ).toEqual( 201 );
      expect( res.body.data.name ).toEqual( 'cherry' );
      expect( res.body.data.type ).toEqual( 'fruit' );
      expect(res.body.id.length).toBeGreaterThan(0);
      id = res.body.id;
    } );
    
     // Test get method
  it( 'should return food using GET', async () => {
    const res = await request.get( '/api/v1/food' );
    expect( res.status ).toEqual( 200 );
    expect( Array.isArray( res.body ) ).toBeTruthy();
  } );

  // Test get method with id
  it( 'should return specific food data using GET', async () => {
    const res = await request.get( `/api/v1/food/${id}` );
    expect( res.body.data.name ).toEqual( 'cherry' );
    expect( res.body.data.type ).toEqual( 'fruit' );
    expect( res.status ).toEqual( 200 );
  } );
    // Test update method
    it( 'should update specific food data using PUT', async () => {
        // arrange
        let food = {
          name: 'raspberry',
          type:'fruit',
        };
        const res = await request.put( `/api/v1/food/${id}` ).send ( food );
        expect( res.body.data.name ).toEqual( 'raspberry' );
        expect( res.body.data.type ).toEqual( 'fruit' );
        expect( res.status ).toEqual( 200 );
      } );
        // Test delete method
  it( 'should delete specific food data using PUT', async () => {
    const res = await request.delete( `/api/v1/food/${id}` );
    expect( res.status ).toEqual( 200 );
  } );
})

//testing clothes api
describe( 'clothes api', () => {
    let id ;
    // Test create method
    it( 'should create clothes using POST', async () => {
      // arrange
      let clothes = {
        name: 'T-shirt',
        color:'red',
      };
      //act
      const res = await request.post( '/api/v1/clothes' ).send( clothes );
      //assert
      expect( res.status ).toEqual( 201 );
      expect( res.body.data.name ).toEqual( 'T-shirt' );
      expect( res.body.data.color ).toEqual( 'red' );
      expect(res.body.id.length).toBeGreaterThan(0);
      id = res.body.id;
    } );
       // Test get method
  it( 'should return clothes using GET', async () => {
    const res = await request.get( '/api/v1/clothes' );
    expect( res.status ).toEqual( 200 );
    expect( Array.isArray( res.body ) ).toBeTruthy();
  } );

   // Test get method with id
   it( 'should return specific clothes data using GET', async () => {
    const res = await request.get( `/api/v1/clothes/${id}` );
    expect( res.body.data.name ).toEqual( 'T-shirt' );
    expect( res.body.data.color ).toEqual( 'red' );
    expect(res.body.id.length).toBeGreaterThan(0);
    expect( res.status ).toEqual( 200 );
  } );

  // Test update method
  it( 'should update specific clothes data using PUT', async () => {
    // arrange
    let food = {
      name: 'T-shirt',
      color:'green',
    };
    const res = await request.put( `/api/v1/clothes/${id}` ).send ( food );
    expect( res.body.data.name ).toEqual( 'T-shirt' );
    expect( res.body.data.color ).toEqual( 'green' );
    expect(res.body.id.length).toBeGreaterThan(0);
    expect( res.status ).toEqual( 200 );
  } );
      // Test delete method
      it( 'should delete specific clothes data using PUT', async () => {
        const res = await request.delete( `/api/v1/clothes/${id}` );
        expect( res.status ).toEqual( 200 );
      } );
    })
