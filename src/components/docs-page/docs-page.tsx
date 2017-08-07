import { Component } from '@stencil/core';


@Component({
  tag: 'docs-page',
  styleUrl: 'docs-page.scss'
})
export class DocsPage {

  render() {
    console.log('Rendering docs page')
    return (
      <ion-grid>
        <ion-row>
          <ion-col>
            <site-menu></site-menu>
          </ion-col>
          <ion-col col-9>
            {/*<stencil-route url="/docs/getting-started" component="getting-started" router="#router" />*/}
          </ion-col>
        </ion-row>
      </ion-grid>
    )
  }
}