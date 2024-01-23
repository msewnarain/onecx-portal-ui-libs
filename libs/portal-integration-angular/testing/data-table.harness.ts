import { ContentContainerComponentHarness } from '@angular/cdk/testing'
import { TableHeaderColumnHarness } from './table-header-column.harness'
import { TableRowHarness } from './table-row.harness'
import { PPaginatorHarness } from './primeng/p-paginator.harness'

export class DataTableHarness extends ContentContainerComponentHarness {
  static hostSelector = 'ocx-data-table'

  getHeaderColumns = this.locatorForAll(TableHeaderColumnHarness)
  getRows = this.locatorForAll(TableRowHarness)
  getPaginator = this.locatorFor(PPaginatorHarness)
}
