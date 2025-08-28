import { autoUpdate, computePosition, flip, offset, shift } from '@floating-ui/dom';

export const setupDropdown = () => {
  let dropdown: HTMLElement | null = null;
  let cleanupDropdown: (() => void) | null = null;
  let isOpen = false;
  let hideTimeout: number; // ✅ đưa ra ngoài

  const removeDropdown = () => {
    if (dropdown) {
      dropdown.remove();
      dropdown = null;
      isOpen = false;
      cleanupDropdown?.();
      cleanupDropdown = null;
    }
  };

  const createDropdown = (button: HTMLButtonElement, template: HTMLElement) => {
    if (isOpen || !template) return;

    dropdown = document.createElement('nav');
    dropdown.classList.add('dropdown');
    dropdown.innerHTML = template.innerHTML;
    document.body.appendChild(dropdown);

    setTimeout(() => {
      dropdown?.classList.add('show');
      isOpen = true;
    });

    // ✅ Hover giữ dropdown
    dropdown.addEventListener('mouseenter', () => {
      clearTimeout(hideTimeout);
    });

    dropdown.addEventListener('mouseleave', () => {
      hideTimeout = window.setTimeout(() => {
        removeDropdown();
      }, 200);
    });

    cleanupDropdown = autoUpdate(button, dropdown, () => {
      computePosition(button, dropdown!, {
        middleware: [offset(5), shift({ padding: 5 }), flip()],
      }).then(({ x, y }) => {
        Object.assign(dropdown!.style, {
          left: `${55 + x}px`,
          top: `${y}px`,
        });
      });
    });
  };

  document.querySelectorAll('[data-dropdown]').forEach(button => {
    if (!(button instanceof HTMLButtonElement)) return;
    const mode = button.getAttribute('data-dropdown');
    const template = button.nextElementSibling;
    if (!(template instanceof HTMLElement)) return;

    if (mode === 'click') {
      button.addEventListener('click', e => {
        e.preventDefault();
        if (isOpen) {
          removeDropdown();
        } else {
          createDropdown(button, template);
        }
      });
    }

    if (mode === 'hover') {
      const show = () => {
        if (!isOpen) createDropdown(button, template);
        clearTimeout(hideTimeout);
      };

      const hide = () => {
        hideTimeout = window.setTimeout(() => {
          removeDropdown();
        }, 200);
      };

      // hover vào nút → mở dropdown
      button.addEventListener('mouseenter', show);
      button.addEventListener('mouseleave', hide);
    }
  });

  //  đóng khi click ra ngoài
  document.addEventListener('click', e => {
    if (!isOpen || !dropdown) return;
    const target = e.target as HTMLElement;

    if (!dropdown.contains(target) && !target.closest('[data-dropdown="click"]')) {
      removeDropdown();
    }
  });
};
