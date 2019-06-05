import $ from 'jquery';

class Modal {
    constructor() {
        this.openModalButtonAbout = $('.open-modal--about');
        this.openModalButtonPrivacy = $('.open-modal--privacy');
        this.modalAbout = $('.modal--about');
        this.modalPrivacy = $('.modal--privacy');
        this.closeModalButton = $('.modal__close');
        this.events();
    }

    events() {
        //clicking the open modal buttons
        this.openModalButtonAbout.click(this.openModalAbout.bind(this));
        this.openModalButtonPrivacy.click(this.openModalPrivacy.bind(this));
        //clicking the x close modal button
        this.closeModalButton.click(this.closeModalAbout.bind(this));
        this.closeModalButton.click(this.closeModalPrivacy.bind(this));
        //pushes any key
        $(document).keyup(this.keyPressHandler.bind(this));

    }

    keyPressHandler(e) {
        if (e.keyCode == 27) {
            this.closeModalAbout();
            this.closeModalPrivacy();
        }
    }

    openModalAbout() {
        this.modalAbout.addClass('modal--is-visible');
        return false;
    }

    openModalPrivacy() {
        this.modalPrivacy.addClass('modal--is-visible');
        return false;
    }

    closeModalAbout() {
        this.modalAbout.removeClass('modal--is-visible');
    }

    closeModalPrivacy() {
        this.modalPrivacy.removeClass('modal--is-visible');
    }

}

export default Modal;