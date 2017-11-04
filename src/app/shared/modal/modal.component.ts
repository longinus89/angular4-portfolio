import { Component, ElementRef, Input, AfterViewInit, OnDestroy } from '@angular/core';


import { ModalService } from './modal.service';

@Component({
    moduleId: module.id.toString(),
    selector: 'app-modal',
    templateUrl: './modal.component.html',
    styleUrls: ['./styles/modal.component.scss']
})

export class ModalComponent implements AfterViewInit, OnDestroy {
    @Input() mid: string;
    @Input() item: Object;
    @Input() mtitle: string;
    element;

    constructor(private modalService: ModalService, private el: ElementRef) {

    }

    ngAfterViewInit(): void {
        const modal = this;
        const that = this;

        console.log(this.mid);
        console.log(this.mtitle);
        console.log(this.item);

        this.element = document.getElementById(this.mid);

        // ensure mid attribute exists
        if (!this.mid) {
            console.error('modal must have an id');
            return;
        }
        // add self (this modal instance) to the modal service so it's accessible from controllers
        this.modalService.add(modal);
    }

    // remove self from modal service when directive is destroyed
    ngOnDestroy(): void {
        this.modalService.remove(this.mid);
        this.element.remove();
    }

    // open modal
    open(): void {
      console.log('open modal ' + this.mid);
      this.modalService.closeAll();
      this.element.style.display = 'block';
      this.element.parentNode.style.display = 'block';
      // document.body.classList.add('modal-open');
    }

    // close modal
    close(): void {
        console.log('close modal ' + this.mid);
        this.element.style.display = 'none';
        this.element.parentNode.style.display = 'none';
        // document.body.classList.remove('modal-open');
    }
}
