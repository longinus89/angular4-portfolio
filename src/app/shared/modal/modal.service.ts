export class ModalService {
    private modals: any[] = [];

    add(modal: any) {
        // add modal to array of active modals
        this.modals.push(modal);
    }

    public closeAll() {
      this.modals.forEach(function(modal) {
        modal.close();
        return;
      });
    }

    remove(id: string) {
        // remove modal from array of active modals
        const newArray = [];
        this.modals.forEach(function(modal) {
            if (modal.id !== id) {
              newArray.push(modal);
            }
        });

        this.modals = newArray;
    }

    open(id: string) {

        console.log('open in modal service');

        // open modal specified by id
        this.modals.forEach(function(modal) {
            console.log(modal.mid + '?' + id);
            if (modal.mid === id) {
              modal.open();
              return;
            }
        });

    }

    close(id: string) {
        // close modal specified by id
        this.modals.forEach(function(modal) {
            if (modal.id === id) {
              modal.close();
              return;
            }
        });
    }
}
