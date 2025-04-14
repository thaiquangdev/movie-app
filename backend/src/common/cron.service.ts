import { Injectable, Logger, OnModuleInit } from '@nestjs/common';
import * as cron from 'node-cron';
import { CategoriesService } from 'src/categories/categories.service';
import { CountriesService } from 'src/countries/countries.service';
import { TopicService } from 'src/topics/topics.service';

@Injectable()
export class CronService implements OnModuleInit {
  private readonly logger = new Logger(CronService.name);

  constructor(
    private readonly topicService: TopicService,
    private readonly countruyService: CountriesService,
    private readonly categoryService: CategoriesService,
  ) {}

  onModuleInit() {
    this.startDeleteOldTopicsJob();
  }

  /**
   * Xóa các chủ đề đã bị xóa ảo quá 30 ngày
   */
  startDeleteOldTopicsJob() {
    cron.schedule('0 0 * * *', () => {
      void (async () => {
        this.logger.log('Chạy cron job: Xóa chủ đề đã bị xóa ảo quá 30 ngày');
        const deletedCount =
          await this.topicService.permanentlyDeleteOldTopics();
        this.logger.log(`Đã xóa ${deletedCount} chủ đề`);
      })();
    });
  }

  /**
   * Xóa các quốc gia đã bị xóa ảo quá 30 ngày
   */
  startDeleteOldCountriesJob() {
    cron.schedule('0 0 * * *', () => {
      void (async () => {
        this.logger.log('Chạy cron job: Xóa quốc gia đã bị xóa ảo quá 30 ngày');
        const deletedCount =
          await this.countruyService.permanentlyDeleteOldCountries();
        this.logger.log(`Đã xóa ${deletedCount} quốc gia`);
      })();
    });
  }

  /**
   * Xóa các loại phim đã bị xóa ảo quá 30 ngày
   */
  startDeleteOldCategoryJob() {
    cron.schedule('0 0 * * *', () => {
      void (async () => {
        this.logger.log(
          'Chạy cron job: Xóa loại phim đã bị xóa ảo quá 30 ngày',
        );
        const deletedCount =
          await this.categoryService.permanentlyDeleteOldCategories();
        this.logger.log(`Đã xóa ${deletedCount} loại phim`);
      })();
    });
  }
}
